package com.techpower.treegreen.change;

import org.springframework.stereotype.Component;

import java.text.DecimalFormat;

@Component
public class MoneyChange {
    public String toString(double num) {
        DecimalFormat decimalFormat = new DecimalFormat("###,###,###");
        return decimalFormat.format(num);
    }
}
