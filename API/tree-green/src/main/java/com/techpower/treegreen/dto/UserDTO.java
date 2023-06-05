package com.techpower.treegreen.dto;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDTO extends AbstractDTO {
    private String username;
    private String fullName;
    private String avatar;
    private String status;
    private String email;
    private String numberPhone;
    private String address;
}
