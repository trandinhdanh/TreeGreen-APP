package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.ShopEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRepository extends JpaRepository<ShopEntity, Long> {
    boolean existsByName(String name);
}
