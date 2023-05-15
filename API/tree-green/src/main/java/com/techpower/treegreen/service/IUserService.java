package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.UserDTO;

import java.util.List;

public interface IUserService {
    public List<UserDTO> getAllUser(String role);

    public UserDTO delete(long id);

}
