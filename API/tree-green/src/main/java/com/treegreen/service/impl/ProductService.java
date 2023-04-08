package com.treegreen.service.impl;

import com.treegreen.converter.CategoryConverter;
import com.treegreen.converter.ProductConverter;
import com.treegreen.dto.ProductDTO;
import com.treegreen.entity.CategoryEntity;
import com.treegreen.entity.ProductEntity;
import com.treegreen.entity.ProductViewEntity;
import com.treegreen.repository.CategoryRepository;
import com.treegreen.repository.ProductRepository;
import com.treegreen.repository.ProductViewRepository;
import com.treegreen.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductConverter productConverter;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    CategoryConverter categoryConverter;
    @Autowired
    ProductViewRepository productViewRepository;

    @Override
    public ProductDTO getProductDetail(Long id) {
        ProductEntity entity = productRepository.findOneById(id);

        ProductViewEntity productViewEntity = productViewRepository.findOneByProduct(entity);
        productViewEntity.setView(productViewEntity.getView() + 1L);
        productViewRepository.save(productViewEntity);

        productRepository.save(entity);

        return productConverter.toDTO(entity);
    }

    @Override
    public List<ProductDTO> findAll() {
        List<ProductDTO> result = new ArrayList<>();
        for (ProductEntity product : productRepository.findAll()) {
            ProductDTO productDTO = productConverter.toDTO(product);
            productDTO.setCategory(categoryConverter.toDTO(product.getCategory()));
            result.add(productDTO);
        }
        return result;
    }

    @Override
    public ProductDTO save(ProductDTO dto) {
        ProductEntity entity = productConverter.toEntity(dto);

        CategoryEntity categoryEntity = categoryRepository.findByCode(dto.getCategory().getCode());
        entity.setCategory(categoryEntity);

        productRepository.save(entity);

        ProductViewEntity productViewEntity=new ProductViewEntity();
        productViewEntity.setProduct(entity);
        productViewEntity.setView(1L);
        productViewRepository.save(productViewEntity);

        ProductDTO productDTO = productConverter.toDTO(entity);
        productDTO.setCategory(categoryConverter.toDTO(categoryEntity));
        return productDTO;
    }

    @Override
    public ProductDTO update(ProductDTO dto) {
        ProductEntity productEntityOld = productRepository.findOneById(dto.getId());
        ProductEntity result = productConverter.toEntity(dto, productEntityOld);
        productRepository.save(result);
        return productConverter.toDTO(result);
    }

    @Override
    public void delete(long[] ids) {
        for (long item : ids) {
            productRepository.deleteById(item);
        }
    }
}
