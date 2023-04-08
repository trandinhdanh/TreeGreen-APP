package com.treegreen.service;

import com.treegreen.dto.RoleDTO;

public interface IRoleService {
    RoleDTO findOneByCode(String code);
}
