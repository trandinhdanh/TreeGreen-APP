package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.CartDTO;

public interface ICartService {
    public CartDTO getCart(long idUser);

    public CartDTO addProductToCart(long idUser, long idProduct, int quantity);
    public CartDTO updateQuantity(long idUser, long idProduct, int quantity);

    public boolean deleteCartItem(long idUser, long idProduct);

    public boolean deleteAllCartItem(long idUser);
    public void autoUpdatePrice(long idUser);
}
