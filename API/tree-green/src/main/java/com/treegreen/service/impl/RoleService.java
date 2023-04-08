package com.treegreen.service.impl;

import com.treegreen.dto.RoleDTO;
import com.treegreen.entity.RoleEntity;
import com.treegreen.repository.RoleRepository;
import com.treegreen.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public RoleDTO findOneByCode(String code) {
        RoleEntity entity=roleRepository.findOneByCode(code);
        RoleDTO dto=new RoleDTO();
        dto.setName(entity.getName());
        dto.setCode(entity.getCode());
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        return dto;
    }
}
