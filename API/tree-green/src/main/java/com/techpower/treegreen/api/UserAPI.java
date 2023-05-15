package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.UserDTO;
import com.techpower.treegreen.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserAPI {
    @Autowired
    private IUserService iUserService;

    @GetMapping("/list/{role}")
    public List<UserDTO> getAll(@PathVariable("role") String role) {
        return iUserService.getAllUser(role);
    }

    @PutMapping("/{id}")
    public UserDTO delete(@PathVariable("id") long id) {
        return iUserService.delete(id);
    }
}
