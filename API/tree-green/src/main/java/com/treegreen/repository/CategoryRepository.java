package com.treegreen.repository;

import com.treegreen.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
    CategoryEntity findByCode(String code);
}
