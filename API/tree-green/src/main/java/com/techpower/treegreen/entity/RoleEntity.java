package com.techpower.treegreen.entity;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
@Entity
@Table(name = "role")
@Getter
@Setter
public class RoleEntity extends BaseEntity {
    @Column
    private String code;
    @Column
    private String name;
    @ManyToMany(mappedBy = "roles")//mappedBy là cái tên danh sách role bên user
    private List<UserEntity> users = new ArrayList<>();
}
