package com.techpower.treegreen.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "statistical")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StatisticalEntity extends BaseEntity {
    @Column
    private int year;
    @Column
    private int month;
    @Column
    private int quantitySold;
    @Column
    private double totalRevenue;
    @Column
    private double reallyReceived;
    @ManyToOne
    @JoinColumn(name = "used_id")
    private UserEntity user;

}
