package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.OrderDetailEntity;
import com.techpower.treegreen.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetailEntity, Long> {

    List<OrderDetailEntity> findAllByOrder(OrderEntity orderEntity);
}
