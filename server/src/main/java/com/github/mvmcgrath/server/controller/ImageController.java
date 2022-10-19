package com.github.mvmcgrath.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.github.mvmcgrath.server.exception.ResourceNotFoundException;
import com.github.mvmcgrath.server.model.Image;
import com.github.mvmcgrath.server.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @GetMapping("/images")
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    @PostMapping("/images")
    public Image createImage(@RequestBody Image image) {
        return imageRepository.save(image);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<Image> getImageById(@PathVariable Long id) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("An image does not exist with id: " + id));
        return ResponseEntity.ok(image);
    }

    @PutMapping("/images/{id}")
    public ResponseEntity<Image> updateImage(@PathVariable Long id, @RequestBody Image imageDetails) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("An image does not exist with id: " + id));

        image.setTitle(imageDetails.getTitle());
        image.setImage(imageDetails.getImage());

        Image updatedImage = imageRepository.save(image);
        return ResponseEntity.ok(updatedImage);
    }

    @DeleteMapping("/images/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteImage(@PathVariable Long id) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Image does not exist with id: " + id));

        imageRepository.delete(image);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
