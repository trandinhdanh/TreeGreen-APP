package com.techpower.treegreen.entity;


import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "shop")
@Getter
@Setter
public class ShopEntity extends BaseEntity {
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String avatar;
    @OneToMany(mappedBy = "shop")
    private List<ProductEntity> products = new ArrayList<>();
    @OneToMany(mappedBy = "shop")
    private List<BlogEntity> blogs = new ArrayList<>();
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
