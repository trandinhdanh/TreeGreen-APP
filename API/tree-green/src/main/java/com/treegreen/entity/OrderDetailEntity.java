package com.treegreen.entity;


import javax.persistence.*;

@Entity
@Table(name = "order_detail")
public class OrderDetailEntity extends BaseEntity{
    @ManyToOne
@JoinColumn(name = "product_id")
    private ProductEntity product;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity order;
    @Column
    private int quantity;
    @Column
    private double totalPrice;
}
