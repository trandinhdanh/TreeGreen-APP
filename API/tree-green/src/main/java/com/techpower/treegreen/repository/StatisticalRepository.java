package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.StatisticalEntity;
import com.techpower.treegreen.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatisticalRepository extends JpaRepository<StatisticalEntity, Long> {
    StatisticalEntity findOneByUserAndYearAndMonth(UserEntity userEntity, int year, int month);

    List<StatisticalEntity> findAllByUserAndYear(UserEntity userEntity, int year);
}
