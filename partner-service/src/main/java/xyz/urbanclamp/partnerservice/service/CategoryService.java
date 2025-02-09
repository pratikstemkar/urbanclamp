package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.partnerservice.dto.CategoryCreateDTO;
import xyz.urbanclamp.partnerservice.dto.CategoryUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category createCategory(CategoryCreateDTO categoryCreateDTO);
    Category updateCategory(Long id, CategoryUpdateDTO categoryUpdateDTO);
    void deleteCategory(Long id);
}
