package com.techpower.treegreen.api.output;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OutputAuthentication {
    private List<String> roles;
    private String username;
    private String password;
    private String fullName;
    private String shopName;
    private String token;
}
