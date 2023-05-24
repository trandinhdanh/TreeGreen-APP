package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.entity.ShopEntity;

import java.util.List;

public interface IProductService {
    public ProductDTO getProductDetail(long id);

    public List<ProductDTO> getAll();

    public List<ProductDTO> getAllByShop(long idUser);

    public ProductDTO save(ProductDTO dto,long idUser);

    public ProductDTO update(ProductDTO dto);

    public void delete(long[] ids);
}