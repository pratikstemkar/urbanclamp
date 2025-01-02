package xyz.urbanclamp.userservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import xyz.urbanclamp.userservice.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
