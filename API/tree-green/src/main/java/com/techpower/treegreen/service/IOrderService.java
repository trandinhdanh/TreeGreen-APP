package com.techpower.treegreen.service;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.dto.OrderDTO;

public interface IOrderService {
    public OrderDTO save(InputOrder input, long idCart);
}
