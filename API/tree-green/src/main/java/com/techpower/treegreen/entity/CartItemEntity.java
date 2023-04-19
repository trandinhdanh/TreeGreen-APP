package com.techpower.treegreen.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "cart_item")
@Getter
@Setter
public class CartItemEntity extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private CartEntity cart;
    @Column
    private int quantity;
    @Column
    private double totalPrice;
}
