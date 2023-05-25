package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.PaymentMethodEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentMethodRepository extends JpaRepository<PaymentMethodEntity, Long> {
    PaymentMethodEntity findOneByName(String name);
    PaymentMethodEntity findOneById(long id);
}
