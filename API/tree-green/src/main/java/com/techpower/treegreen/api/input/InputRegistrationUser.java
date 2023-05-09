package com.techpower.treegreen.api.input;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InputRegistrationUser {
    private String fullName;
    private String username;
    private String password;
    private String confirmPassword;


}
