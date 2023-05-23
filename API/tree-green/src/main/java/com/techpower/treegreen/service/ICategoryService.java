package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.CategoryDTO;

import java.util.List;

public interface ICategoryService {
    List<CategoryDTO> getAll();

    CategoryDTO save(CategoryDTO dto);

    CategoryDTO update(CategoryDTO dto);
}
