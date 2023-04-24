package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.entity.CategoryEntity;
import org.springframework.stereotype.Component;

@Component
public class CategoryConverter {
    public CategoryDTO toDTO(CategoryEntity entity){
        CategoryDTO dto=new CategoryDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setName(entity.getName());
        dto.setCode(entity.getCode());
        return dto;
    }
}
