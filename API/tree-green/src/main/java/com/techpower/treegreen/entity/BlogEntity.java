package com.techpower.treegreen.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "blog")
@Getter
@Setter
public class BlogEntity extends BaseEntity {
    @Column
    private String title;
    @Column
    private String shortDescription;
    @Column(columnDefinition = "TEXT")
    private String content;
    @Column
    private String image;
    @OneToMany(mappedBy = "blog")
    private List<BlogCommentEntity> comments = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "shop_id")
    private ShopEntity shop; 
}
