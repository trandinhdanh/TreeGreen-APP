package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.CartDTO;
import com.techpower.treegreen.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/carts")
public class CartAPI {
    @Autowired
    private ICartService iCartService;

    @GetMapping("/{idUser}")
    public ResponseEntity<CartDTO> getCart(@PathVariable("idUser") long idUser) {
        return ResponseEntity.ok(iCartService.getCart(idUser));
    }

    @PostMapping("/item/{idUser}/{idProduct}")
    public ResponseEntity<CartDTO> addToCart(@PathVariable("idUser") long idUser,
                                             @PathVariable("idProduct") long idProduct,
                                             @RequestBody int quantity) {
        CartDTO cartDTO = iCartService.addProductToCart(idUser, idProduct, quantity);
        if (cartDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(cartDTO);
    }

    @PutMapping("/item/{idUser}/{idProduct}")
    public ResponseEntity<CartDTO> updateQuantity(@PathVariable("idUser") long idUser,
                                                  @PathVariable("idProduct") long idProduct,
                                                  @RequestBody int quantity) {
        CartDTO cartDTO = iCartService.addProductToCart(idUser, idProduct, quantity);
        if (cartDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(cartDTO);
    }
    @DeleteMapping("/item/{idUser}/{idProduct}")
    public ResponseEntity<CartDTO> deleteProduct(@PathVariable("idUser") long idUser,
                                          @PathVariable("idProduct") long idProduct){
        return ResponseEntity.ok(null);
    }
}
