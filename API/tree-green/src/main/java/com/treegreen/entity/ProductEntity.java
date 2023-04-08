package com.treegreen.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
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

    public ProductViewEntity getProductView() {
        return productView;
    }

    public void setProductView(ProductViewEntity productView) {
        this.productView = productView;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public OwnerEntity getOwner() {
        return owner;
    }

    public void setOwner(OwnerEntity owner) {
        this.owner = owner;
    }

    public CategoryEntity getCategory() {
        return category;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }

    public List<ProductImageEntity> getImages() {
        return images;
    }

    public void setImages(List<ProductImageEntity> images) {
        this.images = images;
    }

    public List<ProductReviewEntity> getReviews() {
        return reviews;
    }

    public void setReviews(List<ProductReviewEntity> reviews) {
        this.reviews = reviews;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<CartItemEntity> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItemEntity> cartItems) {
        this.cartItems = cartItems;
    }

    public List<OrderDetailEntity> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetailEntity> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
