package com.techpower.treegreen.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
@Builder
@Getter
@Setter
public class OrderDTO extends AbstractDTO {
    private UserDTO user;
    private PaymentMethodDTO paymentMethod;
    private List<OrderDetailDTO> orderDetails = new ArrayList<>();
    private String status;
    private String address;
    private String numberPhone;
    private double totalPrice;
}
