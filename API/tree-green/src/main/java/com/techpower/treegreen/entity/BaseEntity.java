package com.techpower.treegreen.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass//Khi có con là entity kế thừa thì sẽ được extend những cột được khai báo trong superclass
@EntityListeners(AuditingEntityListener.class)// Để sử dụng auditing
@Getter
@Setter
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
}
