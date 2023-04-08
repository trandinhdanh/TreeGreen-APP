package com.treegreen.service;

import com.treegreen.dto.ProductDTO;

import java.util.List;

public interface IProductService {
    ProductDTO getProductDetail(Long id);
    List<ProductDTO> findAll();
    ProductDTO save(ProductDTO dto);
    ProductDTO update(ProductDTO dto);
    void delete(long[] ids);
}
