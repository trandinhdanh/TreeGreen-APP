package com.treegreen.repository;

import com.treegreen.entity.ProductEntity;
import com.treegreen.entity.ProductViewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductViewRepository extends JpaRepository<ProductViewEntity,Long> {
//    ProductViewEntity findOneById(Long id);
    ProductViewEntity findOneByProduct(ProductEntity productEntity);
}
