package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.entity.OrderEntity;
import org.springframework.stereotype.Component;

@Component
public class OrderConverter {
    public OrderDTO toDTO(OrderEntity entity){
        OrderDTO dto = new OrderDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());

        dto.setPaymentMethod(entity.getPaymentMethod());
        dto.setStatus(entity.getStatus());
        dto.setAddress(entity.getAddress());
        dto.setNumberPhone(entity.getNumberPhone());
        dto.setTotalPrice(entity.getTotalPrice());
        return dto;
    }
}
