package com.treegreen.converter;

import com.treegreen.dto.ProductDTO;
import com.treegreen.entity.ProductEntity;
import com.treegreen.entity.ProductImageEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductConverter {
    public ProductDTO toDTO(ProductEntity entity){
        ProductDTO dto=new ProductDTO();
        dto.setId(entity.getId());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreateDate(entity.getCreateDate());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setName(entity.getName());
        dto.setCode(entity.getCode());
        dto.setImage(entity.getImage());
        dto.setShortDescription(entity.getShortDescription());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setQuantity(entity.getQuantity());
        dto.setProductView(entity.getProductView().getView());

//        if (entity.getCategory()!=null)
//            dto.setCategory(categoryConverter.toDTO(entity.getCategory()));

        List<String> images = new ArrayList<>();
        for (ProductImageEntity image:entity.getImages()) {
            images.add(image.getUrlImage());
        }
        dto.setImages(images);

        return dto;
    }
    public ProductEntity toEntity(ProductDTO dto){
        ProductEntity entity = new ProductEntity();
        entity.setName(dto.getName());
        entity.setCode(dto.getCode());
        entity.setImage(dto.getImage());
        entity.setShortDescription(dto.getShortDescription());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());
        return entity;
    }
    public ProductEntity toEntity(ProductDTO dto, ProductEntity entity) {
        entity.setName(dto.getName());
        entity.setCode(dto.getCode());
        entity.setImage(dto.getImage());
        entity.setShortDescription(dto.getShortDescription());
        entity.setDescription(dto.getDescription());
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());
        return entity;
    }
}
