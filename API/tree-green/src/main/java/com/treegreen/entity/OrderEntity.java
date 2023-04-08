package com.treegreen.entity;



import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class OrderEntity extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "used_id")
    private UserEntity user;
    @ManyToOne
    @JoinColumn(name = "paymentmethod_id")
    private PaymentMethodEntity paymentMethod;
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
