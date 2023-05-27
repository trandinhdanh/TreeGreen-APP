package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.OrderDetailDTO;
import com.techpower.treegreen.entity.OrderDetailEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class OrderDetailConverter {
    private OrderDetailDTO dto;

    public OrderDetailDTO toDTO(OrderDetailEntity entity) {
        OrderDetailDTO dto = new OrderDetailDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());

        dto.setPrice(entity.getPrice());
        dto.setQuantity(entity.getQuantity());
        return dto;
    }

    public List<OrderDetailDTO> toDTOs(List<OrderDetailEntity> entities) {
        List<OrderDetailDTO> dtos = new ArrayList<>();
        for (OrderDetailEntity entity : entities) {
            dtos.add(toDTO(entity));
        }
        return dtos;
    }
}
