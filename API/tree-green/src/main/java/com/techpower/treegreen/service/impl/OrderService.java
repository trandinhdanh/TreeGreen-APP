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
import java.util.List;

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

    @Transactional
    @Override
    public OrderDTO save(InputOrder input, long idCart) {
        CartEntity cartEntity = cartRepository.findOneById(idCart);
        UserEntity userEntity = cartEntity.getUser();

        OrderEntity orderEntity = orderRepository.save(new OrderEntity());

        List<OrderDetailEntity> orderDetailEntities = new ArrayList<>();

        List<CartItemEntity> cartItemEntities = cartItemRepository.findAllByCart(cartEntity);
        for (CartItemEntity cartItemEntity : cartItemEntities) {

            OrderDetailEntity orderDetailEntity = new OrderDetailEntity();
            orderDetailEntity.setOrder(orderEntity);
            orderDetailEntity.setProduct(cartItemEntity.getProduct());
            orderDetailEntity.setPrice(cartItemEntity.getProduct().getPrice());
            orderDetailEntity.setQuantity(cartItemEntity.getQuantity());
            orderDetailRepository.save(orderDetailEntity);

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
        orderEntity.setNumberPhone(input.getNumberPhone());
        orderRepository.save(orderEntity);

        cartItemRepository.deleteAllByCart(cartEntity);

        OrderDTO result = orderConverter.toDTO(orderEntity);
        result.setUser(userConverter.toDTO(userEntity));
        result.setOrderDetails(orderDetailDTOS);
        return result;
    }
}
