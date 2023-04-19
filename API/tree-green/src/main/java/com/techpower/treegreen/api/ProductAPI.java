package com.techpower.treegreen.api;

import com.cloudinary.Cloudinary;
import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.service.IproductService;
import com.techpower.treegreen.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class ProductAPI {
    @Autowired
    private IproductService iproductService;
    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private CloudinaryService cloudinaryService;
    @GetMapping("/products")
    public List<ProductDTO> getAll(){
        return iproductService.getAll();
    }
    @PostMapping("/product")
    public ProductDTO save(@RequestParam("name") String name,
                           @RequestParam("code") String code,
                           @RequestParam("image") MultipartFile image,
                           @RequestParam("price") double price,
                           @RequestParam("quantity") Long quantity,
                           @RequestParam("shortDescription") String shortDescription,
                           @RequestParam("description") String description,
                           @RequestParam("category") String category){
        ProductDTO dto = new ProductDTO();
        dto.setName(name);
        dto.setCode(code);
        dto.setImage(cloudinaryService.uploadImage(image));
        dto.setPrice(price);
        dto.setQuantity(quantity);
        dto.setShortDescription(shortDescription);
        dto.setDescription(description);
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCode(category);
        dto.setCategory(categoryDTO);
        return iproductService.save(dto);
    }
}
