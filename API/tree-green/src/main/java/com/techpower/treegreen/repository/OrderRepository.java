package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.OrderEntity;
import com.techpower.treegreen.entity.ShopEntity;
import com.techpower.treegreen.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    List<OrderEntity> findAllByUserOrderByStatus(UserEntity userEntity);
    List<OrderEntity> findAllByShopOrderByStatus(ShopEntity shopEntity);
    OrderEntity findOneById(long id);
}
