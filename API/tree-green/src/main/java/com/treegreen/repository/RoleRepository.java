package com.treegreen.repository;

import com.treegreen.dto.RoleDTO;
import com.treegreen.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity,Long> {
    RoleEntity findOneByCode(String code);
}
