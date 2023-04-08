package com.treegreen.entity;

import javax.persistence.*;

@Entity
@Table(name = "product_view")
public class ProductViewEntity extends BaseEntity{
    @OneToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;
    @Column
    private Long view;

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }

    public Long getView() {
        return view;
    }

    public void setView(Long view) {
        this.view = view;
    }
}
