package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemDTO extends AbstractDTO {
    private ProductDTO product;
    private int quantity;
    private double price;
}
