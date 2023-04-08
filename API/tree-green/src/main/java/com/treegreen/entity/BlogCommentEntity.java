package com.treegreen.entity;

import javax.persistence.*;

@Entity
@Table(name = "blog_comment")
public class BlogCommentEntity extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "blog_id")
    private BlogEntity blog;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @Column
    private String comment;
}
