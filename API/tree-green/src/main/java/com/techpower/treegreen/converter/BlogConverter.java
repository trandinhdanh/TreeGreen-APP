package com.techpower.treegreen.converter;

import com.techpower.treegreen.dto.BlogDTO;
import com.techpower.treegreen.entity.BlogEntity;
import org.springframework.stereotype.Component;

@Component
public class BlogConverter {
    public BlogDTO toDTO(BlogEntity entity) {
        BlogDTO dto = new BlogDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setTitle(entity.getTitle());
        dto.setShortDescription(entity.getShortDescription());
        dto.setContent(entity.getContent());
        dto.setImage(entity.getImage());
        return dto;
    }

    public BlogEntity toEntity(BlogDTO dto) {
        BlogEntity entity = new BlogEntity();
        entity.setTitle(dto.getTitle());
        entity.setShortDescription(dto.getShortDescription());
        entity.setContent(dto.getContent());
        entity.setImage(dto.getImage());
        return entity;
    }

    public BlogEntity toEntity(BlogDTO dto, BlogEntity entity) {
        entity.setTitle(dto.getTitle());
        entity.setShortDescription(dto.getShortDescription());
        entity.setContent(dto.getContent());
        if (dto.getImage() != null) {
            entity.setImage(dto.getImage());
        }
        return entity;
    }
}
