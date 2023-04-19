package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.service.IproductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductAPI {
    @Autowired
    private IproductService iproductService;
    @GetMapping("/products")
    public List<ProductDTO> getAll(){
        return iproductService.getAll();
    }
}
