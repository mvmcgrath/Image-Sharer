package com.github.mvmcgrath.server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.github.mvmcgrath.server.model.UserDAO;

@Repository
public interface UserRepository extends CrudRepository<UserDAO, Integer> {
    UserDAO findByUsername(String username);
}