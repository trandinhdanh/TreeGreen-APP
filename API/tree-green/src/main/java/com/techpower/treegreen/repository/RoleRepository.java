package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    RoleEntity findByCode(String code);
}
