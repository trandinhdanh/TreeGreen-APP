package com.treegreen.entity;


import javax.persistence.*;

@Entity
@Table(name = "product_review")
public class ProductReviewEntity extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column
    private String review;
}
