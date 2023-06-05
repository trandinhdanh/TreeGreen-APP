package com.techpower.treegreen.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.cglib.core.internal.Function;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.time.temporal.ChronoUnit.DAYS;

@Service
public class JWTUtil {
    private static final String SECRET_KEY = "66556A586E3272357538782F413F4428472B4B6150645367566B597033733676";

    public boolean isTokenValid(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    private boolean isTokenExpired(String token) {
        Date today = Date.from(Instant.now());
        return extractClaims(token).getExpiration().before(today);
    }

    private Claims extractClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInkey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    private Key getSignInkey() {
        //tạo ra Key để mã hóa bằng cách sử dụng chuỗi bí mật(SECRET_KEY) và thuật toán hmacShaKeyFor
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }
    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(new HashMap<>()) //truyền thông tin bổ sung vào phần payload
                .setSubject(userDetails.getUsername()) //xác thực người dùng
                .setIssuedAt(Date.from(Instant.now()))//thời gian phát hành của token
                .setExpiration(
                        Date.from(
                                Instant.now().plus(2, DAYS)
                        )
                )//thời gian hết hạn của token 2 ngày
                .signWith(getSignInkey(), SignatureAlgorithm.HS256)//thực hiện kí mã hóa bằng cách sử dụng pt getSignInkey và thuật toán HS256
                .compact();// kết thúc và trả token
    }

//    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
//        return Jwts
//                .builder()
//                .setClaims(extraClaims)
//                .setSubject(userDetails.getUsername())
//                .setIssuedAt(Date.from(Instant.now()))
//                .setExpiration(
//                        Date.from(
//                                Instant.now().plus(2, DAYS)
//                        )
//                )
//                .signWith(getSignInkey(), SignatureAlgorithm.HS256)
//                .compact();
//    }
}
