package xyz.urbanclamp.partnerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.urbanclamp.partnerservice.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
