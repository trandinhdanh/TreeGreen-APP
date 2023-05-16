package com.techpower.treegreen.api.output;

import lombok.*;

import java.util.List;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OutputAuthentication {
    private String token;
    private List<String> roles;
    private String username;
    private String password;
    private String avatar;
    private String fullName;
    private String shopName;
    private String email;
    private String numberPhone;
    private String address;
}
