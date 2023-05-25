package com.techpower.treegreen.api;

import com.techpower.treegreen.api.input.InputOrder;
import com.techpower.treegreen.dto.OrderDTO;
import com.techpower.treegreen.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/orders")
public class OrderAPI {
    @Autowired
    private IOrderService iOrderService;

    @PostMapping("/{idCart}")
    public ResponseEntity<OrderDTO> order(@PathVariable("idCart") long idCart,
                                          @RequestBody InputOrder inputOrder) {
        OrderDTO orderDTO = iOrderService.save(inputOrder, idCart);
        if (orderDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.ok(orderDTO);
    }
}
