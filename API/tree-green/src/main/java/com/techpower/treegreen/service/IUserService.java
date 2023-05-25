package com.techpower.treegreen.service;

import com.techpower.treegreen.api.input.InputChangePassword;
import com.techpower.treegreen.dto.UserDTO;

import java.util.List;

public interface IUserService {
    public List<UserDTO> getAllUser(String role);

    public UserDTO lock(long id,long status);

    public UserDTO changePassword(InputChangePassword changePassword);

    public UserDTO update(UserDTO userDTO);

}
