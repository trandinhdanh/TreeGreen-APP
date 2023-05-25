package com.techpower.treegreen.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "payment_method")
@Getter
@Setter
public class PaymentMethodEntity extends BaseEntity {
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String status;
    @OneToMany(mappedBy = "paymentMethod")
    private List<OrderEntity> orders = new ArrayList<>();
}
