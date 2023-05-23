package com.techpower.treegreen.api;

import com.techpower.treegreen.dto.CategoryDTO;
import com.techpower.treegreen.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/category")
public class CategoryAPI {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/list")
    public List<CategoryDTO> getAll() {
        return iCategoryService.getAll();
    }

    @PostMapping("")
    public CategoryDTO save(@RequestBody CategoryDTO dto) {
        return iCategoryService.save(dto);
    }

    @PutMapping("/{id}")
    public CategoryDTO save(@PathVariable("id") long id, @RequestBody CategoryDTO dto) {
        dto.setId(id);
        return iCategoryService.update(dto);
    }


}
