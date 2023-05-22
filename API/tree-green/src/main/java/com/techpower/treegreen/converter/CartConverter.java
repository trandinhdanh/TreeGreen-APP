package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.CartDTO;
import com.techpower.treegreen.entity.CartEntity;
import org.springframework.stereotype.Component;

@Component
public class CartConverter {
    public CartDTO toDTO(CartEntity entity){
        CartDTO dto = new CartDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setTotalPrice(entity.getTotalPrice());
        return dto;
    }
}
