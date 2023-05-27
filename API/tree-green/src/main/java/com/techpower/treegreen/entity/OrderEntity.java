package com.techpower.treegreen.entity;



import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "orders")
@Getter
@Setter
public class OrderEntity extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "used_id")
    private UserEntity user;
    @ManyToOne
    @JoinColumn(name = "shop_id")
    private ShopEntity shop;
    @Column
    private String paymentMethod;
    @Column
    private double totalPrice;
    @Column
    private String status;
    @Column
    private String address;
    @Column
    private String numberPhone;
    @OneToMany(mappedBy = "order")
    List<OrderDetailEntity> orderDetails=new ArrayList<>();
}
