package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.PaymentMethodDTO;
import com.techpower.treegreen.service.IPaymentMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/payment-methods")
public class PaymentMethodAPI {
    @Autowired
    private IPaymentMethodService iPaymentMethodService;

    @GetMapping("")
    public ResponseEntity<List<PaymentMethodDTO>> getAll() {
        List<PaymentMethodDTO> paymentMethodDTOS = iPaymentMethodService.getAll();
        if (paymentMethodDTOS == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(paymentMethodDTOS);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentMethodDTO> getAll(@PathVariable("id") long id) {
        PaymentMethodDTO paymentMethodDTO = iPaymentMethodService.getDetail(id);
        if (paymentMethodDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(paymentMethodDTO);
    }

    @PostMapping("")
    public ResponseEntity<PaymentMethodDTO> save(@RequestBody PaymentMethodDTO dto) {
        PaymentMethodDTO paymentMethod = iPaymentMethodService.save(dto);
        if (paymentMethod == null) {
            return ResponseEntity.badRequest().build();
        } else
            return ResponseEntity.ok(paymentMethod);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentMethodDTO> update(@PathVariable("id") long id,
                                                   @RequestBody PaymentMethodDTO dto) {
        dto.setId(id);
        PaymentMethodDTO paymentMethod = iPaymentMethodService.update(dto);
        if (paymentMethod == null) {
            return ResponseEntity.badRequest().build();
        } else
            return ResponseEntity.ok(paymentMethod);
    }

    @PutMapping("/{id}/{status}")
    public ResponseEntity<PaymentMethodDTO> lock(@PathVariable("id") long id,
                                                 @PathVariable("status") long status) {
        PaymentMethodDTO paymentMethod = iPaymentMethodService.delete(id, status);
        if (paymentMethod != null) {
            return ResponseEntity.ok(paymentMethod);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
