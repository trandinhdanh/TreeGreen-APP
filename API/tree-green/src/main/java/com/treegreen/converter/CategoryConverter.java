package com.treegreen.converter;

import com.treegreen.dto.CategoryDTO;
import com.treegreen.entity.CategoryEntity;
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
//    public CategoryEntity toEntity(CategoryDTO dto){
//        CategoryEntity entity=new CategoryEntity();
//        entity.setId(dto.getId());
//        entity.setCreateBy(dto.getCreateBy());
//        entity.setCreateDate(dto.getCreateDate());
//        entity.setModifiedBy(dto.getModifiedBy());
//        entity.setModifiedDate(dto.getModifiedDate());
//        entity.setName(dto.getName());
//        entity.setCode(dto.getCode());
//        return entity;
//    }
}
