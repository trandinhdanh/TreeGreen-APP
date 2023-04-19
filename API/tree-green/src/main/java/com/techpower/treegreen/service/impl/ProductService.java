package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.CategoryConverter;
import com.techpower.treegreen.converter.ProductConverter;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.entity.CategoryEntity;
import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.ProductViewEntity;
import com.techpower.treegreen.repository.CategoryRepository;
import com.techpower.treegreen.repository.ProductRepository;
import com.techpower.treegreen.repository.ProductViewRepository;
import com.techpower.treegreen.service.IproductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IproductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private CategoryConverter categoryConverter;
    @Autowired
    private ProductViewRepository productViewRepository;

    @Override
    public List<ProductDTO> getAll() {
        List<ProductDTO> result = new ArrayList<>();
        for (ProductEntity entity : productRepository.findAll()){
            ProductDTO dto = productConverter.toDTO(entity);
            dto.setCategory(categoryConverter.toDTO(entity.getCategory()));
            result.add(dto);
        }
        return result;
    }

    @Override
    public ProductDTO save(ProductDTO dto) {
        ProductEntity entity = productConverter.toEntity(dto);
        CategoryEntity categoryEntity = categoryRepository.findByCode(dto.getCategory().getCode());
        entity.setCategory(categoryEntity);
        productRepository.save(entity);

        ProductViewEntity productViewEntity = new ProductViewEntity();
        productViewEntity.setProduct(entity);
        productViewEntity.setView(1L);
        productViewRepository.save(productViewEntity);
        entity.setProductView(productViewEntity);

        productRepository.save(entity);
        ProductDTO productDTO = productConverter.toDTO(entity);
        productDTO.setCategory(categoryConverter.toDTO(categoryEntity));

        return productDTO;
    }
}
