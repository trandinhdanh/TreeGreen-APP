package com.treegreen.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "payment_method")
public class PaymentMethodEntity extends BaseEntity{
    @Column
    private String name;
    @Column
    private String description;
    @OneToMany(mappedBy = "paymentMethod")
    private List<OrderEntity> orders = new ArrayList<>();
}
