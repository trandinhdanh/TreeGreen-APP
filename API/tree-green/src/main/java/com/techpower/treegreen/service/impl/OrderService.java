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

import java.time.LocalDate;
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
    @Autowired
    private StatisticalRepository statisticalRepository;
    @Autowired
    private ProductRepository productRepository;

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
            OrderEntity order = orderRepository.save(orderEntity);

            for (OrderDetailEntity orderDetailEntity : orderDetailRepository.findAllByOrder(order)) {
                ProductEntity productEntity = orderDetailEntity.getProduct();
                productEntity.setQuantity(productEntity.getQuantity() - orderDetailEntity.getQuantity());
                productRepository.save(productEntity);
            }

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

        List<OrderEntity> orderEntitiesSorted = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_WAIT_CONFIRM)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_CONFIRM)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_CANCEL)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_DONE)){
                orderEntitiesSorted.add(orderEntity);
            }
        }

        List<OrderDTO> result = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntitiesSorted) {
            OrderDTO orderDTO = orderConverter.toDTO(orderEntity);
            orderDTO.setUser(userConverter.toDTO(userRepository.findOneById(idUser)));
            List<OrderDetailDTO> orderDetailDTOS = new ArrayList<>();
            for (OrderDetailEntity orderDetailEntity : orderEntity.getOrderDetails()) {
                OrderDetailDTO orderDetailDTO = orderDetailConverter.toDTO(orderDetailEntity);
                ProductDTO productDTO = productConverter.toDTO(orderDetailEntity.getProduct());
                productDTO.setCategory(categoryConverter.toDTO(orderDetailEntity.getProduct().getCategory()));
                orderDetailDTO.setProduct(productDTO);
                orderDetailDTOS.add(orderDetailDTO);
            }
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
        List<OrderEntity> orderEntitiesSorted = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_WAIT_CONFIRM)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_CONFIRM)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_DONE)){
                orderEntitiesSorted.add(orderEntity);
            }
        }
        for (OrderEntity orderEntity : orderEntities){
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_CANCEL)){
                orderEntitiesSorted.add(orderEntity);
            }
        }

        List<OrderDTO> result = new ArrayList<>();
        for (OrderEntity orderEntity : orderEntitiesSorted) {
            OrderDTO orderDTO = orderConverter.toDTO(orderEntity);
            orderDTO.setUser(userConverter.toDTO(orderEntity.getUser()));
            List<OrderDetailDTO> orderDetailDTOS = new ArrayList<>();
            for (OrderDetailEntity orderDetailEntity : orderEntity.getOrderDetails()) {
                OrderDetailDTO orderDetailDTO = orderDetailConverter.toDTO(orderDetailEntity);
                ProductDTO productDTO = productConverter.toDTO(orderDetailEntity.getProduct());
                productDTO.setCategory(categoryConverter.toDTO(orderDetailEntity.getProduct().getCategory()));
                orderDetailDTO.setProduct(productDTO);
                orderDetailDTOS.add(orderDetailDTO);
            }
            orderDTO.setOrderDetails(orderDetailDTOS);
            result.add(orderDTO);
        }
        return result;
    }

    @Override
    public List<OrderDTO> statusConfirm(long idOrder) {
        OrderEntity orderEntity = orderRepository.findOneById(idOrder);
        if (orderEntity != null) {
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_WAIT_CONFIRM)) {
                orderEntity.setStatus(StatusConstant.ORDER_CONFIRM);
                orderRepository.save(orderEntity);
            }
            return showOrdersOfSeller(orderRepository.findOneById(idOrder).getShop().getUser().getId());
        } else
            return null;
    }

    @Override
    public List<OrderDTO> statusDone(long idOrder) {
        OrderEntity orderEntity = orderRepository.findOneById(idOrder);
        if (orderEntity != null) {
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_CONFIRM)) {
                orderEntity.setStatus(StatusConstant.ORDER_DONE);
                orderRepository.save(orderEntity);
                //xử lí thống kê - start
                UserEntity admin = userRepository.findOneByUsername("admin");
                UserEntity seller = orderRepository.findOneById(idOrder).getShop().getUser();
                StatisticalEntity statisticalAdmin = statisticalRepository.findOneByUserAndYearAndMonth(
                        admin, LocalDate.now().getYear(), LocalDate.now().getMonthValue()
                );
                StatisticalEntity statisticalSeller = statisticalRepository.findOneByUserAndYearAndMonth(
                        seller, LocalDate.now().getYear(), LocalDate.now().getMonthValue()
                );
                int quantity = 0;
                for (OrderDetailEntity orderDetailEntity : orderRepository.findOneById(idOrder).getOrderDetails()) {
                    quantity += orderDetailEntity.getQuantity();
                }
                statisticalAdmin.setQuantitySold(statisticalAdmin.getQuantitySold() + quantity);
                statisticalAdmin.setReallyReceived(statisticalAdmin.getReallyReceived() + (orderRepository.findOneById(idOrder).getTotalPrice() * 0.1));
                statisticalAdmin.setTotalRevenue(statisticalAdmin.getTotalRevenue() + (orderRepository.findOneById(idOrder).getTotalPrice() * 0.1));
                statisticalSeller.setQuantitySold(statisticalSeller.getQuantitySold() + quantity);
                statisticalSeller.setReallyReceived(statisticalSeller.getReallyReceived() + (orderRepository.findOneById(idOrder).getTotalPrice() * 0.9));
                statisticalSeller.setTotalRevenue(statisticalSeller.getTotalRevenue() + orderRepository.findOneById(idOrder).getTotalPrice());
                statisticalRepository.save(statisticalAdmin);
                statisticalRepository.save(statisticalSeller);
                //xử lí thống kê - end
            }
            return showOrdersOfSeller(orderRepository.findOneById(idOrder).getShop().getUser().getId());
        } else
            return null;
    }

    @Override
    public List<OrderDTO> statusCancel(long idOrder) {
        OrderEntity orderEntity = orderRepository.findOneById(idOrder);
        if (orderEntity != null) {
            if (!orderEntity.getStatus().equals(StatusConstant.ORDER_DONE)) {
                orderEntity.setStatus(StatusConstant.ORDER_CANCEL);
                orderRepository.save(orderEntity);
                List<OrderDetailEntity> orderDetailEntities = orderDetailRepository.findAllByOrder(orderEntity);
                for (OrderDetailEntity orderDetailEntity : orderDetailEntities) {
                    ProductEntity productEntity = orderDetailEntity.getProduct();
                    productEntity.setQuantity(productEntity.getQuantity() + orderDetailEntity.getQuantity());
                    productRepository.save(productEntity);
                }
            }
            return showOrdersOfSeller(orderRepository.findOneById(idOrder).getShop().getUser().getId());
        } else
            return null;
    }

    @Override
    public OrderDTO getDetail(long idOrder) {
        OrderEntity orderEntity = orderRepository.findOneById(idOrder);
        OrderDTO result = orderConverter.toDTO(orderEntity);
        result.setUser(userConverter.toDTO(orderEntity.getUser()));
        List<OrderDetailDTO> orderDetailDTOS = new ArrayList<>();
        for (OrderDetailEntity orderDetailEntity : orderEntity.getOrderDetails()) {
            OrderDetailDTO orderDetailDTO = orderDetailConverter.toDTO(orderDetailEntity);
            ProductDTO productDTO = productConverter.toDTO(orderDetailEntity.getProduct());
            productDTO.setCategory(categoryConverter.toDTO(orderDetailEntity.getProduct().getCategory()));
            orderDetailDTO.setProduct(productDTO);
            orderDetailDTOS.add(orderDetailDTO);
        }
        result.setOrderDetails(orderDetailDTOS);
        return result;
    }

    @Override
    public OrderDTO userCancelOrder(long idOrder) {
        OrderEntity orderEntity = orderRepository.findOneById(idOrder);
        if (orderEntity != null) {
            if (orderEntity.getStatus().equals(StatusConstant.ORDER_WAIT_CONFIRM)) {
                orderEntity.setStatus(StatusConstant.ORDER_CANCEL);
                orderRepository.save(orderEntity);
                List<OrderDetailEntity> orderDetailEntities = orderDetailRepository.findAllByOrder(orderEntity);
                for (OrderDetailEntity orderDetailEntity : orderDetailEntities) {
                    ProductEntity productEntity = orderDetailEntity.getProduct();
                    productEntity.setQuantity(productEntity.getQuantity() + orderDetailEntity.getQuantity());
                    productRepository.save(productEntity);
                }
            }
            return getDetail(idOrder);
        } else
            return null;
    }
}
