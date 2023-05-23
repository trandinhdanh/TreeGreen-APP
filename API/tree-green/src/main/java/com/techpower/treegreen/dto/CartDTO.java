package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
public class CartDTO extends AbstractDTO {
    private List<CartItemDTO> cartItems = new ArrayList<>();
    private double totalPrice;
}
