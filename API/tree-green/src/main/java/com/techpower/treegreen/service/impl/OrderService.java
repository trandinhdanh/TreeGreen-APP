package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.constant.StatusConstant;
import com.techpower.treegreen.converter.*;
import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.dto.OrderDetailDTO;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.entity.*;
import com.techpower.treegreen.repository.*;
import com.techpower.treegreen.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class OrderService implements IOrderService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private OrderDetailConverter orderDetailConverter;
    @Autowired
    private ProductConverter productConverter;
    @Autowired
    private OrderConverter orderConverter;
    @Autowired
    private CategoryConverter categoryConverter;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopRepository shopRepository;

    @Transactional
    @Override
    public List<OrderDTO> save(InputOrder input, long idCart) {
        List<OrderDTO> result = new ArrayList<>();
        CartEntity cartEntity = cartRepository.findOneById(idCart);
        UserEntity userEntity = cartEntity.getUser();

        List<ProductEntity> productEntities = new ArrayList<>();
        for (CartItemEntity cartItem : cartEntity.getCartItems()) {
            productEntities.add(cartItem.getProduct());
        }
        Set<ShopEntity> shopSet = new HashSet<>();
        for (ProductEntity product : productEntities) {
            ShopEntity shop = product.getShop();
            if (shop != null) {
                shopSet.add(shop);
            }
        }
        List<ShopEntity> shopEntities = new ArrayList<>(shopSet);
        for (ShopEntity shopEntity : shopEntities) {
            OrderEntity orderEntity = orderRepository.save(new OrderEntity());

            List<OrderDetailEntity> orderDetailEntities = new ArrayList<>();
            List<CartItemEntity> cartItemEntities = cartItemRepository.findAllByProduct_Shop(shopEntity);
            for (CartItemEntity cartItemEntity : cartItemEntities) {
                OrderDetailEntity orderDetailEntity = new OrderDetailEntity();
                orderDetailEntity.setOrder(orderEntity);
                orderDetailEntity.setProduct(cartItemEntity.getProduct());
                orderDetailEntity.setPrice(cartItemEntity.getProduct().getPrice());
                orderDetailEntity.setQuantity(cartItemEntity.getQuantity());
                orderDetailEntity = orderDetailRepository.save(orderDetailEntity);

                orderDetailEntities.add(orderDetailEntity);
            }
            double totalPrice = 0;
            List<OrderDetailDTO> orderDetailDTOS = new ArrayList<>();
            for (OrderDetailEntity orderDetailEntity : orderDetailEntities) {
                OrderDetailDTO orderDetailDTO = orderDetailConverter.toDTO(orderDetailEntity);
                totalPrice = totalPrice + (orderDetailDTO.getPrice() * orderDetailDTO.getQuantity());
                ProductDTO productDTO = productConverter.toDTO(orderDetailEntity.getProduct());
                productDTO.setCategory(categoryConverter.toDTO(orderDetailEntity.getProduct().getCategory()));
                orderDetailDTO.setProduct(productDTO);
                orderDetailDTOS.add(orderDetailDTO);
            }

            cartEntity.setTotalPrice(0);
            cartRepository.save(cartEntity);

            orderEntity.setTotalPrice(totalPrice);
            orderEntity.setUser(userEntity);
            orderEntity.setPaymentMethod(input.getPaymentMethod());
            orderEntity.setStatus(StatusConstant.ORDER_WAIT_CONFIRM);
            orderEntity.setAddress(input.getAddress());
            orderEntity.setShop(shopEntity);
            orderEntity.setNumberPhone(input.getNumberPhone());
            orderRepository.save(orderEntity);

            OrderDTO orderDTO = orderConverter.toDTO(orderEntity);
            orderDTO.setUser(userConverter.toDTO(userEntity));
            orderDTO.setOrderDetails(orderDetailDTOS);
            result.add(orderDTO);

        }
        cartItemRepository.deleteAllByCart(cartEntity);
        return result;
    }

    @Override
    public List<OrderDTO> showOrdersOfUser(long idUser) {
        List<OrderEntity> orderEntities = orderRepository.findAllByUserOrderByStatus(
                userRepository.findOneById(idUser)
        );
        List<OrderDTO> result = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntities) {
            OrderDTO orderDTO = orderConverter.toDTO(orderEntity);
            orderDTO.setUser(userConverter.toDTO(userRepository.findOneById(idUser)));
            List<OrderDetailDTO> orderDetailDTOS = orderDetailConverter.toDTOs(orderEntity.getOrderDetails());
            orderDTO.setOrderDetails(orderDetailDTOS);
            result.add(orderDTO);
        }
        return result;
    }

    @Override
    public List<OrderDTO> showOrdersOfSeller(long idUser) {
        List<OrderEntity> orderEntities = orderRepository.findAllByShopOrderByStatus(
                shopRepository.findOneByUser(userRepository.findOneById(idUser))
        );
        List<OrderDTO> result = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntities) {
            OrderDTO orderDTO = orderConverter.toDTO(orderEntity);
            orderDTO.setUser(userConverter.toDTO(orderEntity.getUser()));
            List<OrderDetailDTO> orderDetailDTOS = orderDetailConverter.toDTOs(orderEntity.getOrderDetails());
            orderDTO.setOrderDetails(orderDetailDTOS);
            result.add(orderDTO);
        }
        return result;
    }
}
