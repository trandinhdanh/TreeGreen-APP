package com.treegreen.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "owner")
public class OwnerEntity extends BaseEntity {
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String avatar;
    @OneToMany(mappedBy = "owner")
    private List<ProductEntity> products = new ArrayList<>();
    @OneToMany(mappedBy = "owner")
    private List<BlogEntity> blogs = new ArrayList<>();
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
