package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.ProductImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImageEntity, Long> {
    List<ProductImageEntity> findAllByProduct(ProductEntity productEntity);
}
