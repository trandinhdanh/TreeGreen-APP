package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.constant.StatusConstant;
import com.techpower.treegreen.converter.OrderDetailConverter;
import com.techpower.treegreen.converter.PaymentMethodConverter;
import com.techpower.treegreen.converter.ProductConverter;
import com.techpower.treegreen.converter.UserConverter;
import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.dto.OrderDetailDTO;
import com.techpower.treegreen.entity.*;
import com.techpower.treegreen.repository.*;
import com.techpower.treegreen.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class OrderService implements IOrderService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private UserConverter userConverter;
    @Autowired
    private PaymentMethodRepository paymentMethodRepository;
    @Autowired
    private PaymentMethodConverter paymentMethodConverter;
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

    @Override
    public OrderDTO save(InputOrder input, long idCart) {
        CartEntity cartEntity = cartRepository.findOneById(idCart);
        UserEntity userEntity = cartEntity.getUser();
        PaymentMethodEntity paymentMethodEntity = paymentMethodRepository.findOneByName(input.getPaymentMethod());

        OrderEntity orderEntity = orderRepository.save(new OrderEntity());
        orderEntity.setUser(userEntity);
        orderEntity.setPaymentMethod(paymentMethodEntity);
        orderEntity.setStatus(StatusConstant.ORDER_WAIT_CONFIRM);
        orderEntity.setAddress(input.getAddress());
        orderEntity.setNumberPhone(input.getNumberPhone());
//        orderEntity.setTotalPrice(0);
        orderRepository.save(orderEntity);

        List<OrderDetailEntity> orderDetailEntities = new ArrayList<>();
        List<OrderDetailDTO> orderDetailDTOS = new ArrayList<>();

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
        for (OrderDetailEntity orderDetailEntity : orderDetailEntities) {
            OrderDetailDTO orderDetailDTO = orderDetailConverter.toDTO(orderDetailEntity);
            orderDetailDTO.setProduct(productConverter.toDTO(orderDetailEntity.getProduct()));
            orderDetailDTOS.add(orderDetailDTO);
        }

        return OrderDTO.builder()
                .user(userConverter.toDTO(userEntity))
                .paymentMethod(paymentMethodConverter.toDTO(paymentMethodEntity))
                .orderDetails(orderDetailDTOS)
                .status(StatusConstant.ORDER_WAIT_CONFIRM)
                .address(input.getAddress())
                .numberPhone(input.getNumberPhone())
                .totalPrice(0)
                .build();
    }
}
