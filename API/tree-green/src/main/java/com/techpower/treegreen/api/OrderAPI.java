package com.techpower.treegreen.api;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/orders")
public class OrderAPI {
    @Autowired
    private IOrderService iOrderService;

    @PostMapping("/{idCart}")
    public ResponseEntity<List<OrderDTO>> order(@PathVariable("idCart") long idCart,
                                                @RequestBody InputOrder inputOrder) {
        List<OrderDTO> orderDTO = iOrderService.save(inputOrder, idCart);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

    @GetMapping("/user/{idUser}")
    public ResponseEntity<List<OrderDTO>> showOrdersOfUser(@PathVariable("idUser") long idUser) {
        List<OrderDTO> orderDTO = iOrderService.showOrdersOfUser(idUser);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

    @GetMapping("/seller/{idUser}")
    public ResponseEntity<List<OrderDTO>> showOrdersOfSeller(@PathVariable("idUser") long idUser) {
        List<OrderDTO> orderDTO = iOrderService.showOrdersOfSeller(idUser);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

    @PutMapping("/seller/{idOrder}/status/confirm")
    public ResponseEntity<List<OrderDTO>> updateStatusConfirm(@PathVariable("idOrder") long idOrder) {
        List<OrderDTO> orderDTO = iOrderService.statusConfirm(idOrder);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

    @PutMapping("/seller/{idOrder}/status/done")
    public ResponseEntity<List<OrderDTO>> updateStatusDone(@PathVariable("idOrder") long idOrder) {
        List<OrderDTO> orderDTO = iOrderService.statusDone(idOrder);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

    @PutMapping("/seller/{idOrder}/status/cancel")
    public ResponseEntity<List<OrderDTO>> updateStatusCancel(@PathVariable("idOrder") long idOrder) {
        List<OrderDTO> orderDTO = iOrderService.statusCancel(idOrder);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(orderDTO);
    }

}
