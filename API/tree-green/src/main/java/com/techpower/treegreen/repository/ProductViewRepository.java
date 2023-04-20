package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.ProductViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductViewRepository extends JpaRepository<ProductViewEntity,Long> {
    ProductViewEntity findOneByProduct(ProductEntity productEntity);
}
