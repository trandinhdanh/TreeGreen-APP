package com.techpower.treegreen.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrderDTO extends AbstractDTO {
    private UserDTO user;
    private String paymentMethod;
    private List<OrderDetailDTO> orderDetails = new ArrayList<>();
    private String status;
    private String address;
    private String numberPhone;
    private double totalPrice;
}
