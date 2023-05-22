package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.CartEntity;
import com.techpower.treegreen.entity.CartItemEntity;
import com.techpower.treegreen.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItemEntity, Long> {
    CartItemEntity findOneByCartAndProduct(CartEntity cartEntity, ProductEntity productEntity);
    List<CartItemEntity> findAllByCart(CartEntity cartEntity);
}