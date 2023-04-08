package com.treegreen.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cart")
public class CartEntity extends BaseEntity{
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column
    private double totalPrice;
    @OneToMany(mappedBy = "cart")
    private List<CartItemEntity> cartItems = new ArrayList<>();
}
