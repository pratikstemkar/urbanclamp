package xyz.urbanclamp.partnerservice.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xyz.urbanclamp.partnerservice.dto.CategoryCreateDTO;
import xyz.urbanclamp.partnerservice.dto.CategoryUpdateDTO;
import xyz.urbanclamp.partnerservice.exception.CategoryNotFoundException;
import xyz.urbanclamp.partnerservice.model.Category;
import xyz.urbanclamp.partnerservice.repository.CategoryRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException("Category not found with ID: " + id));
    }

    @Override
    public Category createCategory(CategoryCreateDTO categoryCreateDTO) {
        Category category = modelMapper.map(categoryCreateDTO, Category.class);
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Long id, CategoryUpdateDTO categoryUpdateDTO) {
        Category category = getCategoryById(id);
        category.setTitle(categoryUpdateDTO.getTitle());
        category.setDescription(categoryUpdateDTO.getDescription());
        category.setPicture(categoryUpdateDTO.getPicture());
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        if(!categoryRepository.existsById(id))
            throw new CategoryNotFoundException("Category not found with ID: " + id);
        categoryRepository.deleteById(id);
    }
}
