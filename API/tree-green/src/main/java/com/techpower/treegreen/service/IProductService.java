package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.ProductDTO;

import java.util.List;

public interface IProductService {
    public ProductDTO getProductDetail(long id);

    public List<ProductDTO> getAll();

    public ProductDTO save(ProductDTO dto);

    public ProductDTO update(ProductDTO dto);

    public void delete(long[] ids);
}
