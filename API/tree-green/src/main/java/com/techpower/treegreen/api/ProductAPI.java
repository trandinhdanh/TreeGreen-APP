package com.techpower.treegreen.api;

import com.cloudinary.Cloudinary;
import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.service.IProductService;
import com.techpower.treegreen.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins =  "http://localhost:3000")
@RestController
@RequestMapping("/product")
public class ProductAPI {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/{id}")
    public ProductDTO getProductDetail(@PathVariable long id) {
        return iProductService.getProductDetail(id);
    }

    @GetMapping("/list")
    public List<ProductDTO> getAll() {
        return iProductService.getAll();
    }

    @PostMapping("")
    public ProductDTO save(@RequestParam("name") String name,
                           @RequestParam("code") String code,
                           @RequestParam("image") MultipartFile image,
                           @RequestParam("price") double price,
                           @RequestParam("quantity") Long quantity,
                           @RequestParam("shortDescription") String shortDescription,
                           @RequestParam("description") String description,
                           @RequestParam("category") String category,
                           @RequestParam("images") List<MultipartFile> images) {
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

        List<String> imagesDTO = new ArrayList<>();
        for (MultipartFile imageDetail : images) {
            imagesDTO.add(cloudinaryService.uploadImage(imageDetail));
        }
        dto.setImages(imagesDTO);

        return iProductService.save(dto);
    }

    @PutMapping("/{id}")
    public ProductDTO updateProduct(@PathVariable("id") long id,
                                    @RequestParam("name") String name,
                                    @RequestParam("code") String code,
                                    @RequestParam("image") MultipartFile image,
                                    @RequestParam("price") double price,
                                    @RequestParam("quantity") Long quantity,
                                    @RequestParam("shortDescription") String shortDescription,
                                    @RequestParam("description") String description,
                                    @RequestParam("category") String category) {
        ProductDTO dto = new ProductDTO();
        dto.setId(id);
        dto.setName(name);
        dto.setCode(code);
        if (!image.isEmpty()) {
            dto.setImage(cloudinaryService.uploadImage(image));
        }
        dto.setPrice(price);
        dto.setQuantity(quantity);
        dto.setShortDescription(shortDescription);
        dto.setDescription(description);
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCode(category);
        dto.setCategory(categoryDTO);
        return iProductService.update(dto);
    }

    @DeleteMapping("")
    public void deleteProduct(@RequestBody long[] ids) {
        iProductService.delete(ids);
    }
}
