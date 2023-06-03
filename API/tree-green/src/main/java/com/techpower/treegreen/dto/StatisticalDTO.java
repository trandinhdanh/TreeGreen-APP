package com.techpower.treegreen.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StatisticalDTO extends AbstractDTO {
    private int year;
    private int month;
    private int quantitySold;
    private double totalRevenue;
    private double reallyReceived;
}
