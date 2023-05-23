package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.CategoryEntity;
import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.ShopEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    ProductEntity findOneById(Long id);

    List<ProductEntity> findAllByCategory(CategoryEntity categoryEntity);
    List<ProductEntity> findAllByShop(ShopEntity shopEntity);

}
