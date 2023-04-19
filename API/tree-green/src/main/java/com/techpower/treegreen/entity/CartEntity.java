package com.techpower.treegreen.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cart")
@Getter
@Setter
public class CartEntity extends BaseEntity{
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column
    private double totalPrice;
    @OneToMany(mappedBy = "cart")
    private List<CartItemEntity> cartItems = new ArrayList<>();
}
