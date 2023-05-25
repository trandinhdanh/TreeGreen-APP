package com.techpower.treegreen.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
public class AbstractDTO {
    private Long id;
    private String createBy;
    private Date createDate;
    private String modifiedBy;
    private Date modifiedDate;
}
