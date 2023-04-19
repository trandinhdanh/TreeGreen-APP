package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
public class UserEntity extends BaseEntity {
    @Column
    private String userName;
    @Column
    private String password;
    @Column
    private String fullName;
    @Column
    private String status;
    @ManyToMany
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<RoleEntity> roles = new ArrayList<>();
    @OneToMany(mappedBy = "user")
    private List<ProductReviewEntity> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<BlogCommentEntity> comments = new ArrayList<>();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private CartEntity cart;
    @OneToMany(mappedBy = "user")
    List<OrderEntity> orders = new ArrayList<>();
}
