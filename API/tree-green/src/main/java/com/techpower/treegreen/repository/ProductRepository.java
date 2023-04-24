package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Long> {
    ProductEntity findOneById(Long id);
}
