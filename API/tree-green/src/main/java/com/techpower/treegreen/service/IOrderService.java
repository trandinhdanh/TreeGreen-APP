package com.techpower.treegreen.service;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.dto.OrderDTO;

import java.util.List;

public interface IOrderService {
    public List<OrderDTO> save(InputOrder input, long idCart);

    public List<OrderDTO> showOrdersOfUser(long idUser);

    public List<OrderDTO> showOrdersOfSeller(long idUser);

    public List<OrderDTO> statusConfirm(long idOrder);

    public List<OrderDTO> statusDone(long idOrder);

    public List<OrderDTO> statusCancel(long idOrder);
    public OrderDTO getDetail(long idOrder);

    public OrderDTO userCancelOrder(long idOrder);

}
