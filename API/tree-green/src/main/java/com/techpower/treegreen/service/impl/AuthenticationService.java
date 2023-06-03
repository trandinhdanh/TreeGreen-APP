package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.api.input.InputRegistrationSeller;
import com.techpower.treegreen.api.input.InputAuthentication;
import com.techpower.treegreen.api.output.OutputAuthentication;
import com.techpower.treegreen.api.input.InputRegistrationUser;
import com.techpower.treegreen.constant.ImageConstant;
import com.techpower.treegreen.constant.RoleConstant;
import com.techpower.treegreen.constant.StatusConstant;
import com.techpower.treegreen.converter.UserConverter;
import com.techpower.treegreen.entity.*;
import com.techpower.treegreen.jwt.JWTUtil;
import com.techpower.treegreen.repository.*;
import com.techpower.treegreen.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ShopRepository shopRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JWTUtil jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserConverter userConverter;
    private final StatisticalRepository statisticalRepository;

    @Override
    public OutputAuthentication authenticate(InputAuthentication request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        //xử lí thống kê - start
        if (statisticalRepository.findOneByUserAndYearAndMonth(
                user, LocalDate.now().getYear(), LocalDate.now().getMonthValue()
        ) == null && !user.getRoles().get(0).getCode().equals("USER")) {
            StatisticalEntity statistical = StatisticalEntity.builder()
                    .year(LocalDate.now().getYear())
                    .month(LocalDate.now().getMonthValue())
                    .quantitySold(0)
                    .totalRevenue(0)
                    .reallyReceived(0)
                    .user(user)
                    .build();
            statisticalRepository.save(statistical);
        }
        //xử lí thống kê - end
        if (user.getStatus().equals(StatusConstant.NON_ACTIVE)) {
            return null;
        }
        var jwtToken = jwtService.generateToken(user);
        List<String> roles = new ArrayList<>();
        String shopName = "";
        for (RoleEntity roleEntity : user.getRoles()) {
            roles.add(roleEntity.getCode());
            if (roleEntity.getCode().equalsIgnoreCase("SELLER")) {
                ShopEntity shop = shopRepository.findOneByUser(user);
                shopName = shop.getName();
            }
        }
        return OutputAuthentication.builder()
                .roles(roles)
                .userDTO(userConverter.toDTO(user))
                .shopName(shopName)
                .token(jwtToken)
                .build();
    }


    @Override
    public OutputAuthentication registerUser(InputRegistrationUser request) {
        var user = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .status(StatusConstant.ACTIVE)
                .fullName(request.getFullName())
                .avatar(ImageConstant.AVATAR_DEFAULT)
                .roles(addRole(RoleConstant.USER))
                .build();
        UserEntity userEntity = userRepository.save(user);

        CartEntity cartEntity = new CartEntity();
        cartEntity.setUser(userEntity);
        cartEntity.setTotalPrice(0.0);
        cartRepository.save(cartEntity);

        List<String> roles = new ArrayList<>();
        for (RoleEntity roleEntity : userEntity.getRoles()) {
            roles.add(roleEntity.getCode());
        }
        var jwtToken = jwtService.generateToken(user);
        return OutputAuthentication.builder()
                .roles(roles)
                .userDTO(userConverter.toDTO(userEntity))
                .shopName("")
                .token(jwtToken)
                .build();
    }

    @Override
    public OutputAuthentication registerSeller(InputRegistrationSeller request) {
        var user = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .status(StatusConstant.ACTIVE)
                .fullName(request.getFullName())
                .avatar(ImageConstant.AVATAR_DEFAULT)
                .roles(addRole(RoleConstant.SELLER))
                .build();
        UserEntity userEntity = userRepository.save(user);
        var shop = ShopEntity.builder()
                .name(request.getShopName())
                .user(userEntity)
                .build();
        shopRepository.save(shop);
        List<String> roles = new ArrayList<>();
        for (RoleEntity roleEntity : userEntity.getRoles()) {
            roles.add(roleEntity.getCode());
        }
        var jwtToken = jwtService.generateToken(user);
        return OutputAuthentication.builder()
                .roles(roles)
                .userDTO(userConverter.toDTO(userEntity))
                .shopName(shop.getName())
                .token(jwtToken)
                .build();
    }

    private List<RoleEntity> addRole(String role) {
        List<RoleEntity> result = new ArrayList<>();
        result.add(roleRepository.findByCode(role));
        return result;
    }

}