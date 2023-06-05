package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
public class BlogDTO extends AbstractDTO {
    private String title;
    private String shortDescription;
    private String content;
    private String image;
}
