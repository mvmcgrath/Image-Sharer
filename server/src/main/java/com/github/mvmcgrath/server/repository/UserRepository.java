package com.github.mvmcgrath.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.github.mvmcgrath.server.model.UserDAO;

@Repository
public interface UserRepository extends JpaRepository<UserDAO, Long> {
    UserDAO findByUsername(String username);
}