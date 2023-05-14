package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.api.input.InputRegistrationSeller;
import com.techpower.treegreen.api.input.InputAuthentication;
import com.techpower.treegreen.api.output.OutputAuthentication;
import com.techpower.treegreen.api.input.InputRegistrationUser;
import com.techpower.treegreen.constant.RoleConstant;
import com.techpower.treegreen.constant.UserConstant;
import com.techpower.treegreen.entity.RoleEntity;
import com.techpower.treegreen.entity.ShopEntity;
import com.techpower.treegreen.entity.UserEntity;
import com.techpower.treegreen.repository.RoleRepository;
import com.techpower.treegreen.repository.ShopRepository;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ShopRepository shopRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public OutputAuthentication authenticate(InputAuthentication request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
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
                .username(user.getUsername())
                .password(request.getPassword())
                .fullName(user.getFullName())
                .shopName(shopName)
                .token(jwtToken)
                .build();}


        @Override
        public OutputAuthentication registerUser(InputRegistrationUser request) {
            var user = UserEntity.builder()
                    .username(request.getUsername())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .status(UserConstant.ACTIVE)
                    .fullName(request.getFullName())
                    .roles(addRole(RoleConstant.USER))
                    .build();
            UserEntity userEntity = userRepository.save(user);
            List<String> roles = new ArrayList<>();
            for (RoleEntity roleEntity : userEntity.getRoles()) {
                roles.add(roleEntity.getCode());
            }
            var jwtToken = jwtService.generateToken(user);
            return OutputAuthentication.builder()
                    .roles(roles)
                    .username(user.getUsername())
                    .password(request.getPassword())
                    .fullName(user.getFullName())
                    .shopName("")
                    .token(jwtToken)
                    .build();
    }

    @Override
    public OutputAuthentication registerSeller(InputRegistrationSeller request) {
        var user = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .status(UserConstant.ACTIVE)
                .fullName(request.getFullName())
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
                .username(user.getUsername())
                .password(request.getPassword())
                .fullName(user.getFullName())
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
