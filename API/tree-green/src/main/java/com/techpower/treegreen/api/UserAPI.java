package com.techpower.treegreen.api;

import com.cloudinary.Cloudinary;
import com.techpower.treegreen.api.input.InputChangePassword;
import com.techpower.treegreen.dto.UserDTO;
import com.techpower.treegreen.service.IUserService;
import com.techpower.treegreen.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/users")
public class UserAPI {
    @Autowired
    private IUserService iUserService;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/{role}")
    public ResponseEntity<List<UserDTO>> getAll(@PathVariable("role") String role) {
        List<UserDTO> users = iUserService.getAllUser(role);
        if (!users.isEmpty()) {
            return ResponseEntity.ok(users);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PutMapping("/{id}/{status}")
    public ResponseEntity<UserDTO> lock(@PathVariable("id") long id,
                                        @PathVariable("status") long status) {
        UserDTO deletedUser = iUserService.lock(id, status);
        if (deletedUser != null) {
            return ResponseEntity.ok(deletedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/password")
    public ResponseEntity<UserDTO> changePassword(@RequestBody InputChangePassword changePassword) {
        UserDTO updatedUser = iUserService.changePassword(changePassword);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/profile/{username}")
    public ResponseEntity<UserDTO> update(@PathVariable("username") String username,
                                          @RequestParam(value = "avatar", required = false) MultipartFile avatar,
                                          @RequestParam(value = "fullName", required = false) String fullName,
                                          @RequestParam(value = "email", required = false) String email,
                                          @RequestParam(value = "numberPhone", required = false) String numberPhone,
                                          @RequestParam(value = "address", required = false) String address) {
        UserDTO user = UserDTO.builder()
                .username(username)
                .avatar(cloudinaryService.uploadImage(avatar))
                .fullName(fullName)
                .email(email)
                .numberPhone(numberPhone)
                .address(address)
                .build();
        UserDTO updatedUser = iUserService.update(user);

        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}