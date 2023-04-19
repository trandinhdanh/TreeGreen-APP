package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "blog_comment")
@Getter
@Setter
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
