package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO extends AbstractDTO {
    private String username;
    private String fullName;
    private String status;
    private String email;
    private String numberPhone;
    private String address;
}
