package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.converter.CartConverter;
import com.techpower.treegreen.converter.CartItemConverter;
import com.techpower.treegreen.converter.CategoryConverter;
import com.techpower.treegreen.converter.ProductConverter;
import com.techpower.treegreen.dto.CartDTO;
import com.techpower.treegreen.dto.CartItemDTO;
import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.dto.ProductDTO;
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
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private CategoryConverter categoryConverter;
//    private CartItemEntity cartItemEntity;
//    private double totalPrice;

    @Override
    public CartDTO getCart(long idUser) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        List<CartItemEntity> cartItemEntities = cartItemRepository.findAllByCart(cartEntity);
        CartDTO cartDTO = cartConverter.toDTO(cartEntity);
        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        for (CartItemEntity cartItem : cartItemEntities) {
            CartItemDTO itemDTO= cartItemConverter.toDTO(cartItem);
            ProductDTO productDTO = productConverter.toDTO(cartItem.getProduct());
            productDTO.setCategory(categoryConverter.toDTO(cartItem.getProduct().getCategory()));
            itemDTO.setProduct(productDTO);
            cartItemDTOS.add(itemDTO);
        }
        cartDTO.setCartItems(cartItemDTOS);
        return cartDTO;
    }

    @Override
    public CartDTO addProductToCart(long idUser, long idProduct, int quantity) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        ProductEntity productEntity = productRepository.findOneById(idProduct);
        CartItemEntity cartItemEntity = cartItemRepository.findOneByCartAndProduct(cartEntity, productEntity);
        if (cartItemEntity == null) {
            cartItemEntity = CartItemEntity.builder()
                    .product(productEntity)
                    .cart(cartEntity)
                    .quantity(quantity)
                    .price(productEntity.getPrice())
                    .build();
        } else {
            cartItemEntity.setQuantity(cartItemEntity.getQuantity() + quantity);
        }

        CartItemDTO cartItemDTO = cartItemConverter.toDTO(cartItemRepository.save(cartItemEntity));
        double totalPrice = 0;
        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        for (CartItemEntity cartItem : cartItemRepository.findAllByCart(cartEntity)) {
            totalPrice = totalPrice + (cartItem.getPrice() * cartItem.getQuantity());
            CartItemDTO itemDTO= cartItemConverter.toDTO(cartItem);
            ProductDTO productDTO = productConverter.toDTO(cartItem.getProduct());
            productDTO.setCategory(categoryConverter.toDTO(cartItem.getProduct().getCategory()));
            itemDTO.setProduct(productDTO);
            cartItemDTOS.add(itemDTO);
        }
        cartEntity.setTotalPrice(totalPrice);
        CartDTO result = cartConverter.toDTO(cartRepository.save(cartEntity));
        result.setCartItems(cartItemDTOS);
        return result;
    }

    @Override
    public CartDTO updateQuantity(long idUser, long idProduct, int quantity) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        ProductEntity productEntity = productRepository.findOneById(idProduct);
        CartItemEntity cartItemEntity = cartItemRepository.findOneByCartAndProduct(cartEntity, productEntity);
        cartItemEntity.setQuantity(quantity);
        cartItemRepository.save(cartItemEntity);

        List<CartItemDTO> cartItemDTOS = new ArrayList<>();
        for (CartItemEntity cartItem : cartItemRepository.findAllByCart(cartEntity)) {
            CartItemDTO itemDTO= cartItemConverter.toDTO(cartItem);
            ProductDTO productDTO = productConverter.toDTO(cartItem.getProduct());
            productDTO.setCategory(categoryConverter.toDTO(cartItem.getProduct().getCategory()));
            itemDTO.setProduct(productDTO);
            cartItemDTOS.add(itemDTO);
        }

        CartDTO result = cartConverter.toDTO(cartRepository.save(cartEntity));
        result.setCartItems(cartItemDTOS);
        autoUpdatePrice(idUser);
        return result;
    }

    @Override
    public boolean deleteCartItem(long idUser, long idProduct) {
        CartItemEntity cartItem = cartItemRepository.findOneByCartAndProduct(
                cartRepository.findOneByUser(userRepository.findOneById(idUser)),
                productRepository.findOneById(idProduct)
        );
        if (cartItem != null) {
            cartItemRepository.delete(cartItem);
            autoUpdatePrice(idUser);
            return true;
        } else
            return false;
    }

    @Override
    public boolean deleteAllCartItem(long idUser) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        List<CartItemEntity> cartItems = cartItemRepository.findAllByCart(cartEntity);
        if (cartItems != null) {
            cartItemRepository.deleteAllByCart(cartEntity);
            autoUpdatePrice(idUser);
            return true;
        } else
            return false;
    }

    @Override
    public void autoUpdatePrice(long idUser) {
        CartEntity cartEntity = cartRepository.findOneByUser(userRepository.findOneById(idUser));
        List<CartItemEntity> cartItems = cartItemRepository.findAllByCart(cartEntity);
        double totalPrice = 0;
        for (CartItemEntity cartItem : cartItems) {
            totalPrice = totalPrice + (cartItem.getPrice() * cartItem.getQuantity());
        }
        cartEntity.setTotalPrice(totalPrice);
        cartRepository.save(cartEntity);
    }

}
