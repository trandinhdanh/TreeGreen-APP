package com.techpower.treegreen.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "owner")
@Getter
@Setter
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
