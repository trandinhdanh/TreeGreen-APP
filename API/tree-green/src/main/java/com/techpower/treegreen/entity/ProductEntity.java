package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
@Getter
@Setter
public class ProductEntity extends BaseEntity {
    @Column
    private String name;
    @Column
    private String code;
    @Column
    private String image;
    @Column
    private double price;
    @Column
    private Long quantity;
    @Column(columnDefinition = "TEXT")
    private String shortDescription;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private OwnerEntity owner;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;
    @OneToMany(mappedBy = "product")
    private List<ProductImageEntity> images = new ArrayList<>();
    @OneToMany(mappedBy = "product")
    private List<ProductReviewEntity> reviews = new ArrayList<>();
    @OneToMany(mappedBy = "product")
    private List<CartItemEntity> cartItems = new ArrayList<>();
    @OneToMany(mappedBy = "product")
    private List<OrderDetailEntity> orderDetails = new ArrayList<>();
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
    private ProductViewEntity productView;
}
