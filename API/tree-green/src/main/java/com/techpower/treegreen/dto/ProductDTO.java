package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProductDTO extends AbstractDTO {
    private String name;
    private String code;
    private String image;
    private double price;
    private Long quantity;
    private Long productView;
    private String shortDescription;
    private String description;
    private CategoryDTO category;
    private List<String> images = new ArrayList<>();
}
