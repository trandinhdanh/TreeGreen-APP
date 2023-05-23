package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.CartDTO;
import com.techpower.treegreen.dto.CartItemDTO;
import com.techpower.treegreen.entity.CartEntity;
import com.techpower.treegreen.entity.CartItemEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CartItemConverter {
    public CartItemDTO toDTO(CartItemEntity entity) {
        CartItemDTO dto = new CartItemDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());

        dto.setQuantity(entity.getQuantity());
        dto.setPrice(entity.getPrice());
        return dto;
    }

    public List<CartItemDTO> toDTOs(List<CartItemEntity> entities) {
        List<CartItemDTO> result = new ArrayList<>();
        for (CartItemEntity cartItemEntity : entities) {
            result.add(toDTO(cartItemEntity));
        }
        return result;
    }
}
