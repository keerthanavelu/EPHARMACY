package com.medeasy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medeasy.model.Users;

import java.util.Optional;

@Repository
public interface UsersRegister extends JpaRepository<Users, Integer> {

    public Optional<Users> findByEmail(String email);

}
