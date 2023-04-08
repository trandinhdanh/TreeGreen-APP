package com.treegreen.service.impl;

import com.treegreen.converter.UserConverter;
import com.treegreen.dto.UserDTO;
import com.treegreen.repository.UserRepository;
import com.treegreen.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConverter userConverter;
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(userConverter.toEntity(userDTO));
        return userDTO;
    }
}
