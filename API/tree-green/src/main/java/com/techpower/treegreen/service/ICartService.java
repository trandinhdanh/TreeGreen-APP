package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.CartDTO;

public interface ICartService {
    public CartDTO getCart(long idUser);

    public CartDTO addProductToCart(long idUser, long idProduct, int quantity);

    public CartDTO updateProductQuantity(long idUser, long idProduct, int quantity);
}
