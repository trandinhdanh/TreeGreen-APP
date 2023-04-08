package com.treegreen.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass//Khi có con là entity kế thừa thì sẽ được extend những cột được khai báo trong superclass
@EntityListeners(AuditingEntityListener.class)// Để sử dụng auditing
public abstract class BaseEntity {
    @Id //not null and primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)//Tự tăng giá trị id
    private Long id;
    @Column(name = "createby")
    @CreatedBy
    private String createBy;
    @Column(name = "createdate")
    @CreatedDate
    private Date createDate;
    @Column(name = "modifiedby")
    @LastModifiedBy
    private String modifiedBy;
    @Column(name = "modifieddate")
    @LastModifiedDate
    private Date modifiedDate;

    public Long getId() {
        return id;
    }
    public void setId(Long id){this.id=id;}
    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }
}
