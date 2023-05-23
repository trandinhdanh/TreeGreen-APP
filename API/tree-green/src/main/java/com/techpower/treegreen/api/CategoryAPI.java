package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/categorys")
public class CategoryAPI {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("")
    public ResponseEntity<List<CategoryDTO>> getAll() {
        List<CategoryDTO> listCategory = iCategoryService.getAll();
        if (listCategory==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(listCategory);
    }

    @PostMapping("")
    public ResponseEntity<CategoryDTO> save(@RequestBody CategoryDTO dto) {
        CategoryDTO category = iCategoryService.save(dto);
        if (category == null) {
            return ResponseEntity.badRequest().build();
        } else
            return ResponseEntity.ok(category);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryDTO> update(@PathVariable("id") long id, @RequestBody CategoryDTO dto) {
        dto.setId(id);
        CategoryDTO category = iCategoryService.update(dto);
        if (category == null) {
            return ResponseEntity.badRequest().build();
        } else
            return ResponseEntity.ok(category);
    }


}
