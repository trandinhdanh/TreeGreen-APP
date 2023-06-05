package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.CategoryConverter;
import com.techpower.treegreen.converter.ProductConverter;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.entity.*;
import com.techpower.treegreen.repository.*;
import com.techpower.treegreen.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private CategoryConverter categoryConverter;
    @Autowired
    private ProductViewRepository productViewRepository;
    @Autowired
    private ProductImageRepository productImageRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;

    @Override
    public ProductDTO getProductDetail(long id) {
        ProductEntity productEntity = productRepository.findOneById(id);

        ProductViewEntity productViewEntity = productViewRepository.findOneByProduct(productEntity);
        productViewEntity.setView(productViewEntity.getView() + 1L);
        productViewRepository.save(productViewEntity);

        productEntity.setProductView(productViewEntity);

        ProductDTO result = productConverter.toDTO(productEntity);
        result.setCategory(categoryConverter.toDTO(productEntity.getCategory()));
        return result;
    }

    @Override
    public List<ProductDTO> getAll() {
        List<ProductDTO> result = new ArrayList<>();
        for (ProductEntity entity : productRepository.findAll()) {
            ProductDTO dto = productConverter.toDTO(entity);
            dto.setCategory(categoryConverter.toDTO(entity.getCategory()));
            result.add(dto);
        }
        return result;
    }

    @Override
    public List<ProductDTO> getAllByShop(long idUser) {
        ShopEntity shopEntity = shopRepository.findOneByUser(userRepository.findOneById(idUser));
        List<ProductDTO> result = new ArrayList<>();
        List<ProductEntity> productEntities = productRepository.findAllByShop(shopEntity);
        if (productEntities != null || !productEntities.isEmpty()) {
            for (ProductEntity entity : productEntities) {
                ProductDTO dto = productConverter.toDTO(entity);
                dto.setCategory(categoryConverter.toDTO(entity.getCategory()));
                result.add(dto);
            }
        }
        return result;
    }

    @Override
    public ProductDTO save(ProductDTO dto, long idUser) {
        ProductEntity entity = productConverter.toEntity(dto);
        CategoryEntity categoryEntity = categoryRepository.findOneByCode(dto.getCategory().getCode());
        entity.setCategory(categoryEntity);
        productRepository.save(entity);

        ProductViewEntity productViewEntity = new ProductViewEntity();
        productViewEntity.setProduct(entity);
        productViewEntity.setView(1L);
        productViewRepository.save(productViewEntity);
        entity.setProductView(productViewEntity);

        for (String urlImageDetail : dto.getImages()) {
            ProductImageEntity productImageEntity = new ProductImageEntity();
            productImageEntity.setUrlImage(urlImageDetail);
            productImageEntity.setProduct(entity);
            productImageRepository.save(productImageEntity);
        }
        entity.setImages(productImageRepository.findAllByProduct(entity));
        entity.setShop(shopRepository.findOneByUser(userRepository.findOneById(idUser)));
        productRepository.save(entity);
        ProductDTO productDTO = productConverter.toDTO(entity);
        productDTO.setCategory(categoryConverter.toDTO(categoryEntity));

        return productDTO;
    }

    @Override
    public ProductDTO update(ProductDTO dto) {
        ProductEntity productEntityOld = productRepository.findOneById(dto.getId());
        CategoryEntity categoryEntity = categoryRepository.findOneByCode(dto.getCategory().getCode());
        if (dto.getImage() == null) {
            dto.setImage(productEntityOld.getImage());
        }
        ProductEntity productEntityNew = productConverter.toEntity(dto, productEntityOld);
        productEntityNew.setCategory(categoryEntity);
        productEntityNew.setShop(productEntityOld.getShop());
        productRepository.save(productEntityNew);

        ProductDTO result = productConverter.toDTO(productEntityNew);
        result.setCategory(categoryConverter.toDTO(categoryEntity));
        return result;
    }

    @Override
    public void delete(long[] ids) {
        for (long id : ids) {
            if (productRepository.findOneById(id) != null) {
                productViewRepository.deleteById(id);
                productRepository.deleteById(id);
            }
        }
    }
}