package com.treegreen.service.impl;

import com.treegreen.converter.CategoryConverter;
import com.treegreen.dto.CategoryDTO;
import com.treegreen.entity.CategoryEntity;
import com.treegreen.repository.CategoryRepository;
import com.treegreen.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryConverter categoryConverter;
//    @Override
//    public CategoryDTO findByCode(String code) {
//        CategoryEntity entity= categoryRepository.findByCode(code);
//        return categoryConverter.toDTO(entity);
//    }
}
