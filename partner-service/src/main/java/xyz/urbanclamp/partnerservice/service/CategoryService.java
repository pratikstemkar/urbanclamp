package xyz.urbanclamp.partnerservice.service;

import xyz.urbanclamp.basedomains.dto.partner.CategoryCreateDTO;
import xyz.urbanclamp.basedomains.dto.partner.CategoryUpdateDTO;
import xyz.urbanclamp.partnerservice.model.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category createCategory(CategoryCreateDTO categoryCreateDTO);
    Category updateCategory(Long id, CategoryUpdateDTO categoryUpdateDTO);
    void deleteCategory(Long id);
}
