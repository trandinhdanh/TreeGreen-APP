package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.CategoryConverter;
import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.entity.CategoryEntity;
import com.techpower.treegreen.repository.CategoryRepository;
import com.techpower.treegreen.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CategoryConverter categoryConverter;

    @Override
    public List<CategoryDTO> getAll() {
        List<CategoryDTO> result = new ArrayList<>();
        for (CategoryEntity categoryEntity : categoryRepository.findAll()) {
            result.add(categoryConverter.toDTO(categoryEntity));
        }
        return result;
    }

    @Override
    public CategoryDTO save(CategoryDTO dto) {
        String code = Normalizer.normalize(dto.getName(), Normalizer.Form.NFD).replaceAll("\\p{M}", "").trim().toUpperCase()
                .replace(" ", "-");
        dto.setCode(code);
        CategoryEntity entity = categoryConverter.toEntity(dto);
        return categoryConverter.toDTO(categoryRepository.save(entity));
    }

    @Override
    public CategoryDTO update(CategoryDTO dto) {
        String code = Normalizer.normalize(dto.getName(), Normalizer.Form.NFD).replaceAll("\\p{M}", "").trim().toUpperCase()
                .replace(" ", "-");
        dto.setCode(code);
        CategoryEntity categoryEntityOld = categoryRepository.findOneById(dto.getId());
        CategoryEntity categoryEntityNew = categoryConverter.toEntity(dto, categoryEntityOld);
        return categoryConverter.toDTO(categoryRepository.save(categoryEntityNew));
    }
}
