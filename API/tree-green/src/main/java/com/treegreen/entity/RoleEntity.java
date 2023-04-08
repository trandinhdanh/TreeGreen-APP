package com.treegreen.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "role")
public class RoleEntity extends BaseEntity {
    @Column
    private String code;
    @Column
    private String name;

    public String getCode() {
        return code;
    }

    @ManyToMany(mappedBy = "roles")//mappedBy là cái tên danh sách role bên user
    private List<UserEntity> users = new ArrayList<>();

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<UserEntity> getUsers() {
        return users;
    }
}
