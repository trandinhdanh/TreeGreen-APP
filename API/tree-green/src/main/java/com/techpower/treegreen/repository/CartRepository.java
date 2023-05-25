package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.CartEntity;
import com.techpower.treegreen.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long> {
    CartEntity findOneByUser(UserEntity userEntity);
    CartEntity findOneById(long id);
}
