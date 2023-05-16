package com.techpower.treegreen.api;

import com.cloudinary.Cloudinary;
import com.techpower.treegreen.api.input.InputChangePassword;
import com.techpower.treegreen.dto.UserDTO;
import com.techpower.treegreen.service.IUserService;
import com.techpower.treegreen.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserAPI {
    @Autowired
    private IUserService iUserService;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/list/{role}")
    public List<UserDTO> getAll(@PathVariable("role") String role) {
        return iUserService.getAllUser(role);
    }

    @PutMapping("/{id}")
    public UserDTO delete(@PathVariable("id") long id) {
        return iUserService.delete(id);
    }

    @PutMapping("/password")
    public UserDTO changePassword(@RequestBody InputChangePassword changePassword) {
        return iUserService.changePassword(changePassword);
    }

    @PutMapping("/profile/{username}")
    public UserDTO update(@PathVariable("username") String username,
                          @RequestParam("avatar") MultipartFile avatar,
                          @RequestParam("fullName") String fullName,
                          @RequestParam("email") String email,
                          @RequestParam("numberPhone") String numberPhone,
                          @RequestParam("address") String address) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(username);
        userDTO.setAvatar(cloudinaryService.uploadImage(avatar));
        userDTO.setFullName(fullName);
        userDTO.setEmail(email);
        userDTO.setNumberPhone(numberPhone);
        userDTO.setAddress(address);
        return iUserService.update(userDTO);
    }
}
