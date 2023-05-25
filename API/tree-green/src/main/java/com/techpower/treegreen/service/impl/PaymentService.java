package com.techpower.treegreen.service.impl;

import com.techpower.treegreen.constant.StatusConstant;
import com.techpower.treegreen.converter.PaymentMethodConverter;
import com.techpower.treegreen.dto.PaymentMethodDTO;
import com.techpower.treegreen.entity.PaymentMethodEntity;
import com.techpower.treegreen.repository.PaymentMethodRepository;
import com.techpower.treegreen.service.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService implements IPaymentService {
    @Autowired
    private PaymentMethodRepository paymentMethodRepository;
    @Autowired
    private PaymentMethodConverter paymentMethodConverter;
    private PaymentMethodEntity paymentMethodEntity;

    @Override
    public List<PaymentMethodDTO> getAll() {
        List<PaymentMethodEntity> entities = paymentMethodRepository.findAll();
        return paymentMethodConverter.toDTOs(entities);
    }

    @Override
    public PaymentMethodDTO getDetail(long id) {
        PaymentMethodEntity entity = paymentMethodRepository.findOneById(id);
        if (entity != null) {
            return paymentMethodConverter.toDTO(entity);
        } else
            return null;
    }

    @Override
    public PaymentMethodDTO save(PaymentMethodDTO dto) {
        PaymentMethodEntity paymentMethodEntity = paymentMethodConverter.toEntity(dto);
        paymentMethodEntity.setStatus(StatusConstant.ACTIVE);
        return paymentMethodConverter.toDTO(
                paymentMethodRepository.save(
                        paymentMethodEntity
                )
        );
    }

    @Override
    public PaymentMethodDTO update(PaymentMethodDTO dto) {
        PaymentMethodEntity paymentMethodEntityOld = paymentMethodRepository.findOneById(dto.getId());
        PaymentMethodEntity paymentMethodEntityNew = paymentMethodConverter.toEntity(dto, paymentMethodEntityOld);
        return paymentMethodConverter.toDTO(paymentMethodRepository.save(paymentMethodEntityNew));
    }

    @Override
    public PaymentMethodDTO delete(long id) {
        PaymentMethodEntity paymentMethodEntity = paymentMethodRepository.findOneById(id);
        paymentMethodEntity.setStatus(StatusConstant.NON_ACTIVE);
        return paymentMethodConverter.toDTO(paymentMethodRepository.save(paymentMethodEntity));
    }
}
