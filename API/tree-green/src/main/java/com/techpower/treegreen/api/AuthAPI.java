package com.techpower.treegreen.api;

import com.techpower.treegreen.api.input.InputAuthentication;
import com.techpower.treegreen.api.input.InputRegistrationSeller;
import com.techpower.treegreen.api.output.OutputAuthentication;
import com.techpower.treegreen.api.input.InputRegistrationUser;
import com.techpower.treegreen.repository.ShopRepository;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.impl.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/auth")
public class AuthAPI {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;

    @PostMapping("/login")
    public ResponseEntity<OutputAuthentication> authenticate(@RequestBody InputAuthentication request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    @PostMapping("/register/u")
    public ResponseEntity<OutputAuthentication> registerUser(@RequestBody InputRegistrationUser request) {
//        if (!request.getPassword().equals(request.getConfirmPassword())) {
//            return ResponseEntity.badRequest().body(new OutputAuthentication("Password incorrect!"));
//        }
//        if (userRepository.existsByUsername(request.getUsername())) {
//            return ResponseEntity.badRequest().body(new OutputAuthentication("Username available!"));
//        }
        return ResponseEntity.ok(authenticationService.registerUser(request));
    }

    @PostMapping("/register/s")
    public ResponseEntity<OutputAuthentication> registerSeller(@RequestBody InputRegistrationSeller request) {
//        if (!request.getPassword().equals(request.getConfirmPassword())) {
//            return ResponseEntity.badRequest().body(new OutputAuthentication("Password incorrect!"));
//        }
//        if (userRepository.existsByUsername(request.getUsername())) {
//            return ResponseEntity.badRequest().body(new OutputAuthentication("Username available!"));
//        }
//        if (shopRepository.existsByName(request.getShopName())) {
//            return ResponseEntity.badRequest().body(new OutputAuthentication("Store name already exists!"));
//        }
        return ResponseEntity.ok(authenticationService.registerSeller(request));
    }
}
