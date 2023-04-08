package com.treegreen.api;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
public class ImageAPI {

    @Autowired
    private ResourceLoader resourceLoader;
    @GetMapping("/images/{fileName:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getImage(@PathVariable String fileName) {
        Resource resource = new ClassPathResource("images/" + fileName);
        try {
            String url = resource.getURL().toString(); // lấy URL của ảnh
            return ResponseEntity.ok().header(HttpHeaders.LOCATION, url).body(resource);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping("/upload")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String uploadDir = System.getProperty("user.dir") + "/uploaded_images"; // đường dẫn tuyệt đối
        try {
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            try (InputStream inputStream = file.getInputStream()) {
                Path filePath = uploadPath.resolve(fileName);
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                throw new RuntimeException("Failed to store file " + fileName, e);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to store file " + fileName, e);
        }
        return ResponseEntity.ok().build();
    }
}

