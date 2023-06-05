package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
    CategoryEntity findOneByCode(String code);
    CategoryEntity findOneById(long id);
}
