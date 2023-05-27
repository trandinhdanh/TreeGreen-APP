package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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
    @JoinColumn(name = "shop_id")
    private ShopEntity shop;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductEntity that = (ProductEntity) o;
        return Double.compare(that.price, price) == 0 && Objects.equals(name, that.name) && Objects.equals(code, that.code) && Objects.equals(image, that.image) && Objects.equals(quantity, that.quantity) && Objects.equals(shortDescription, that.shortDescription) && Objects.equals(description, that.description) && Objects.equals(shop, that.shop) && Objects.equals(category, that.category) && Objects.equals(images, that.images) && Objects.equals(reviews, that.reviews) && Objects.equals(cartItems, that.cartItems) && Objects.equals(orderDetails, that.orderDetails) && Objects.equals(productView, that.productView);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, code, image, price, quantity, shortDescription, description, shop, category, images, reviews, cartItems, orderDetails, productView);
    }
}
