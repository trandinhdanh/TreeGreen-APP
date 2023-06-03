package com.techpower.treegreen.api;

import com.cloudinary.Cloudinary;
import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.dto.ProductDTO;
import com.techpower.treegreen.service.IProductService;
import com.techpower.treegreen.service.impl.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/products")
public class ProductAPI {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductDetail(@PathVariable long id) {
        ProductDTO product = iProductService.getProductDetail(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("")
    public ResponseEntity<List<ProductDTO>> getAll() {
        List<ProductDTO> products = iProductService.getAll();
        if (!products.isEmpty()) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/shop/{idUser}")
    public ResponseEntity<List<ProductDTO>> getAllByShop(@PathVariable("idUser") long idUser) {
        List<ProductDTO> products = iProductService.getAllByShop(idUser);
        if (!products.isEmpty()) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/{idUser}")
    public ResponseEntity<ProductDTO> save(@PathVariable("idUser") long idUser,
                                           @RequestParam("name") String name,
                                           @RequestParam("code") String code,
                                           @RequestParam("image") MultipartFile image,
                                           @RequestParam("price") double price,
                                           @RequestParam("quantity") Long quantity,
                                           @RequestParam("shortDescription") String shortDescription,
                                           @RequestParam("description") String description,
                                           @RequestParam("category") String category,
                                           @RequestParam(value = "images", required = false) List<MultipartFile> images) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCode(category);

        List<String> imagesDTO = new ArrayList<>();
        if (images != null && !images.isEmpty()) {
            for (MultipartFile imageDetail : images) {
                if (!imageDetail.isEmpty())
                    imagesDTO.add(cloudinaryService.uploadImage(imageDetail));
            }
        }

        ProductDTO product = ProductDTO.builder()
                .name(name)
                .code(code)
                .image(cloudinaryService.uploadImage(image))
                .price(price)
                .quantity(quantity)
                .shortDescription(shortDescription)
                .description(description)
                .category(categoryDTO)
                .images(imagesDTO)
                .build();

        ProductDTO savedProduct = iProductService.save(product, idUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable("id") long id,
                                                    @RequestParam(value = "name", required = false) String name,
                                                    @RequestParam(value = "code", required = false) String code,
                                                    @RequestParam(value = "image", required = false) MultipartFile image,
                                                    @RequestParam(value = "price", required = false) double price,
                                                    @RequestParam(value = "quantity", required = false) Long quantity,
                                                    @RequestParam(value = "shortDescription", required = false) String shortDescription,
                                                    @RequestParam(value = "description", required = false) String description,
                                                    @RequestParam(value = "category", required = false) String category) {
        ProductDTO dto = new ProductDTO();
        dto.setId(id);
        dto.setName(name);
        dto.setCode(code);
        if (image != null) {
            dto.setImage(cloudinaryService.uploadImage(image));
        }
        dto.setPrice(price);
        dto.setQuantity(quantity);
        dto.setShortDescription(shortDescription);
        dto.setDescription(description);
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setCode(category);
        dto.setCategory(categoryDTO);

        ProductDTO updatedProduct = iProductService.update(dto);

        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("")
    public ResponseEntity<?> deleteProduct(@RequestBody long[] ids) {
        iProductService.delete(ids);
        return ResponseEntity.noContent().build();
    }

}