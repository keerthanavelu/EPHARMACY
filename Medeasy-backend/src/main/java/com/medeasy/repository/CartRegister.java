package com.medeasy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.medeasy.model.Cart;
import com.medeasy.model.Items;
import com.medeasy.model.Users;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface CartRegister extends JpaRepository<Cart, Long> {

    ArrayList<Cart>  findAllByUsers(Optional<Users> users);

    void deleteByUsersAndItems(Optional<Users> users, Optional<Items> items);
}
