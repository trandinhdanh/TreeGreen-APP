package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.PaymentMethodDTO;
import com.techpower.treegreen.entity.PaymentMethodEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PaymentMethodConverter {
    public PaymentMethodDTO toDTO(PaymentMethodEntity entity) {
        PaymentMethodDTO dto = new PaymentMethodDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());

        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setStatus(entity.getStatus());
        return dto;
    }

    public List<PaymentMethodDTO> toDTOs(List<PaymentMethodEntity> entities) {
        List<PaymentMethodDTO> dtos = new ArrayList<>();
        for (PaymentMethodEntity entity : entities) {
            dtos.add(toDTO(entity));
        }
        return dtos;
    }
    public PaymentMethodEntity toEntity(PaymentMethodDTO dto) {
        PaymentMethodEntity entity = new PaymentMethodEntity();
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setStatus(dto.getStatus());
        return entity;
    }
    public PaymentMethodEntity toEntity(PaymentMethodDTO dto,PaymentMethodEntity entity) {
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setDescription(dto.getDescription());
        entity.setStatus(dto.getStatus());
        return entity;
    }
}
