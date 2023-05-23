package com.techpower.treegreen.api.input;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InputChangePassword {
    private String username;
    private String passwordOld;
    private String passwordNew;
    private String confirmPasswordNew;
}
