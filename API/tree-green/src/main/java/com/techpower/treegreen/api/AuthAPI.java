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
        OutputAuthentication output = authenticationService.authenticate(request);
        if (output != null) {
            return ResponseEntity.ok(output);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PostMapping("/register/u")
    public ResponseEntity<?> registerUser(@RequestBody InputRegistrationUser request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Password incorrect!");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body("Username available!");
        }
        return ResponseEntity.ok(authenticationService.registerUser(request));
    }

    @PostMapping("/register/s")
    public ResponseEntity<?> registerSeller(@RequestBody InputRegistrationSeller request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Password incorrect!");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body("Username available!");
        }
        if (shopRepository.existsByName(request.getShopName())) {
            return ResponseEntity.badRequest().body("Store name already exists!");
        }
        return ResponseEntity.ok(authenticationService.registerSeller(request));
    }
}
