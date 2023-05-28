package com.techpower.treegreen.repository;

import com.techpower.treegreen.entity.BlogEntity;
import com.techpower.treegreen.entity.ShopEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<BlogEntity,Long> {

    BlogEntity findOneById(long idBlog);

    List<BlogEntity> findAllByShop(ShopEntity shopEntity);
}
