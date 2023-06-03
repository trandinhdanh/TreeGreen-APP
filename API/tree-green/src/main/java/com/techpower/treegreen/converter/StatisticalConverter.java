package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.StatisticalDTO;
import com.techpower.treegreen.entity.StatisticalEntity;
import org.springframework.stereotype.Component;

@Component
public class StatisticalConverter {
    public StatisticalDTO toDTO(StatisticalEntity entity) {
        StatisticalDTO dto = new StatisticalDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());

        dto.setYear(entity.getYear());
        dto.setMonth(entity.getMonth());
        dto.setQuantitySold(entity.getQuantitySold());
        dto.setTotalRevenue(entity.getTotalRevenue());
        dto.setReallyReceived(entity.getReallyReceived());
        return dto;
    }

    public StatisticalEntity toEntity(StatisticalDTO dto) {
        StatisticalEntity entity = new StatisticalEntity();
        entity.setYear(dto.getYear());
        entity.setMonth(dto.getMonth());
        entity.setQuantitySold(dto.getQuantitySold());
        entity.setTotalRevenue(dto.getTotalRevenue());
        entity.setReallyReceived(dto.getReallyReceived());
        return entity;
    }
}
