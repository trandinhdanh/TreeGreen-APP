package com.treegreen.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "blog")
public class BlogEntity extends BaseEntity {
    @Column
    private String title;
    @Column
    private String shortDescription;
    @Column
    private String content;
    @Column
    private String image;
    @OneToMany(mappedBy = "blog")
    private List<BlogCommentEntity> comments = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private OwnerEntity owner;
}
