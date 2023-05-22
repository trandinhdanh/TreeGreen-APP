package com.techpower.treegreen.api.output;

import com.techpower.treegreen.dto.UserDTO;
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
    private UserDTO userDTO;
    private String shopName;

}
