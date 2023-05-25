package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentMethodDTO extends AbstractDTO {
    private String name;
    private String description;
    private String status;
}
