package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.api.input.InputChangePassword;
import com.techpower.treegreen.constant.StatusConstant;
import com.techpower.treegreen.converter.UserConverter;
import com.techpower.treegreen.dto.UserDTO;
import com.techpower.treegreen.entity.UserEntity;
import com.techpower.treegreen.jwt.JWTUtil;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtil jwtService;

    @Override
    public List<UserDTO> getAllUser(String role) {
        List<UserEntity> userEntities = userRepository.findByRoles_CodeOrderByStatus(role);
        List<UserDTO> result = new ArrayList<>();
        for (UserEntity userEntity : userEntities) {
            result.add(userConverter.toDTO(userEntity));
        }
        return result;
    }

    @Override
    public UserDTO lock(long id, long status) {
        UserEntity userEntity = userRepository.findOneById(id);
        if (userEntity != null) {
            if (status == 1) {
                userEntity.setStatus(StatusConstant.ACTIVE);
            }
            if (status == 0) {
                userEntity.setStatus(StatusConstant.NON_ACTIVE);
            }
            return userConverter.toDTO(userRepository.save(userEntity));
        } else
            return null;
    }

    @Override
    public UserDTO changePassword(InputChangePassword changePassword) {
        UserEntity userEntity = userRepository.findOneByUsername(changePassword.getUsername());
        String jwtToken = jwtService.generateToken(userEntity);
        if (jwtToken != null) {
            if (changePassword.getPasswordNew().equals(changePassword.getConfirmPasswordNew())) {
                userEntity.setPassword(passwordEncoder.encode(changePassword.getPasswordNew()));
            }
        }
        return userConverter.toDTO(userRepository.save(userEntity));
    }

    @Override
    public UserDTO update(UserDTO userDTO) {
        UserEntity userEntityOld = userRepository.findOneByUsername(userDTO.getUsername());
        userDTO.setId(userEntityOld.getId());
        UserEntity userEntityNew = userConverter.toEntity(userDTO, userEntityOld);
        return userConverter.toDTO(userRepository.save(userEntityNew));
    }

}
