package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.CartConverter;
import com.techpower.treegreen.converter.CartItemConverter;
import com.techpower.treegreen.dto.CartDTO;
import com.techpower.treegreen.dto.CartItemDTO;
import com.techpower.treegreen.entity.CartEntity;
import com.techpower.treegreen.entity.CartItemEntity;
import com.techpower.treegreen.entity.ProductEntity;
import com.techpower.treegreen.entity.UserEntity;
import com.techpower.treegreen.repository.CartItemRepository;
import com.techpower.treegreen.repository.CartRepository;
import com.techpower.treegreen.repository.ProductRepository;
import com.techpower.treegreen.repository.UserRepository;
import com.techpower.treegreen.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private CartConverter cartConverter;
    @Autowired
    private CartItemConverter cartItemConverter;
    private CartItemEntity cartItemEntity;

    @Override
    public CartDTO getCart(long idUser) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        List<CartItemEntity> cartItemEntities = cartItemRepository.findAllByCart(cartEntity);
        CartDTO cartDTO = cartConverter.toDTO(cartEntity);
        List<CartItemDTO> cartItemDTOS = cartItemConverter.toDTOs(cartItemEntities);
        cartDTO.setCartItems(cartItemDTOS);
        return cartDTO;
    }

    @Override
    public CartDTO addProductToCart(long idUser, long idProduct, int quantity) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        ProductEntity productEntity = productRepository.findOneById(idProduct);
        CartItemEntity cartItemEntity = cartItemRepository.findOneByCartAndProduct(cartEntity, productEntity);
        if (cartItemEntity == null) {
            cartItemEntity = new CartItemEntity();
            cartItemEntity.setProduct(productEntity);
            cartItemEntity.setCart(cartEntity);
            cartItemEntity.setQuantity(quantity);
            cartItemEntity.setTotalPrice(productEntity.getPrice());
        } else {
            cartItemEntity.setQuantity(cartItemEntity.getQuantity() + quantity);
        }

        CartItemDTO cartItemDTO = cartItemConverter.toDTO(cartItemRepository.save(cartItemEntity));
        double totalPrice = 0;
        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        for (CartItemEntity cartItem : cartItemRepository.findAllByCart(cartEntity)) {
            totalPrice = totalPrice + (cartItem.getTotalPrice() * cartItem.getQuantity());
            cartItemDTOS.add(cartItemConverter.toDTO(cartItem));
        }
        cartEntity.setTotalPrice(totalPrice);
        CartDTO result = cartConverter.toDTO(cartRepository.save(cartEntity));
        result.setCartItems(cartItemDTOS);
        return result;
    }

    @Override
    public CartDTO updateProductQuantity(long idUser, long idProduct, int quantity) {
        return null;
    }
}
