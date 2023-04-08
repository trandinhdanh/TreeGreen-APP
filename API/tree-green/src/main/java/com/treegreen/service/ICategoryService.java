package com.treegreen.service;

import com.treegreen.dto.CategoryDTO;

public interface ICategoryService {
    CategoryDTO findByCode(String code);
}
