package com.techpower.treegreen.repository;


import com.techpower.treegreen.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);

    UserEntity findOneByUsername(String username);
    UserEntity findOneById(long id);

    boolean existsByUsername(String username);

    boolean existsByPassword(String password);

    List<UserEntity> findByRoles_CodeOrderByStatus(String code);
}
