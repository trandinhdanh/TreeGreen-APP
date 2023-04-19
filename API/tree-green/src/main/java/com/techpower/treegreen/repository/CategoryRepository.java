package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.CategoryEntity;
import com.techpower.treegreen.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
}
