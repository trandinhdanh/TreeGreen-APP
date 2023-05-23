package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.UserDTO;
import com.techpower.treegreen.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    public UserDTO toDTO(UserEntity entity) {
        UserDTO dto = new UserDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setUsername(entity.getUsername());
        dto.setFullName(entity.getFullName());
        dto.setAvatar(entity.getAvatar());
        dto.setStatus(entity.getStatus());
        dto.setEmail(entity.getEmail());
        dto.setNumberPhone(entity.getNumberPhone());
        dto.setAddress(entity.getAddress());
        return dto;
    }

    public UserEntity toEntity(UserDTO dto) {
        UserEntity entity = new UserEntity();
        entity.setId(dto.getId());
        entity.setUsername(dto.getUsername());
        entity.setFullName(dto.getFullName());
        entity.setStatus(dto.getStatus());
        entity.setAvatar(dto.getAvatar());
        entity.setEmail(dto.getEmail());
        entity.setNumberPhone(dto.getNumberPhone());
        entity.setAddress(dto.getAddress());
        return entity;
    }

    public UserEntity toEntity(UserDTO dto, UserEntity entity) {
        entity.setId(dto.getId());
        entity.setFullName(dto.getFullName());
        entity.setAvatar(dto.getAvatar());
        entity.setEmail(dto.getEmail());
        entity.setNumberPhone(dto.getNumberPhone());
        entity.setAddress(dto.getAddress());
        return entity;
    }
}
