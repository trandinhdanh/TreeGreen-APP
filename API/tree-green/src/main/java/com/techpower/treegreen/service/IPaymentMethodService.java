package com.techpower.treegreen.service;

import com.techpower.treegreen.dto.PaymentMethodDTO;

import java.util.List;

public interface IPaymentMethodService {
    public List<PaymentMethodDTO> getAll();

    public PaymentMethodDTO getDetail(long id);

    public PaymentMethodDTO save(PaymentMethodDTO dto);

    public PaymentMethodDTO update(PaymentMethodDTO dto);

    public PaymentMethodDTO delete(long id,long status);

}
