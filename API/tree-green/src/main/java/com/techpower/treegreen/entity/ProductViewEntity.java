package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "product_view")
@Getter
@Setter
public class ProductViewEntity extends BaseEntity {
    @OneToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;
    @Column
    private Long view;
}
