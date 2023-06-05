package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class OrderDetailDTO extends AbstractDTO {
    private ProductDTO product;
    private int quantity;
    private double price;
}
