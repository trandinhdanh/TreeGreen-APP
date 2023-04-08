package com.treegreen.converter;

import com.treegreen.dto.UserDTO;
import com.treegreen.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    public UserEntity toEntity(UserDTO userDTO){
        UserEntity userEntity=new UserEntity();
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setPassword(userDTO.getPassword());
        return userEntity;
    }
}
