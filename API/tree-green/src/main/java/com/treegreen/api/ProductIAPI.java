package com.treegreen.api;

import com.treegreen.dto.ProductDTO;
import com.treegreen.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductIAPI {
    @Autowired
    IProductService iProductService;
    @GetMapping("/product/{id}")
    public ProductDTO getProductDetail(@PathVariable long id){
        return iProductService.getProductDetail(id);
    }

    @GetMapping("/product")
    public List<ProductDTO> getAll() {
        return iProductService.findAll();
    }

    @PostMapping("/product")
    public ProductDTO createProduct(@RequestBody ProductDTO dto) {
        return iProductService.save(dto);
    }

    @PutMapping("/product/{id}")
    public ProductDTO updateProduct(@RequestBody ProductDTO dto, @PathVariable("id") long id) {
        dto.setId(id);
        return iProductService.update(dto);
    }

    @DeleteMapping("/product")
    public void deleteProduct(@RequestBody long[] ids) {
        iProductService.delete(ids);
    }
}


