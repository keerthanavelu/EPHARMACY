package com.medeasy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medeasy.model.Items;
import com.medeasy.model.Users;
import com.medeasy.repository.ItemsRegister;
import com.medeasy.repository.UsersRegister;

import java.security.Principal;
import java.util.Optional;

@Service
public class CurrentUserService {

    @Autowired
    UsersRegister usersRegister;

    public Users getUser(Principal principal) {
        Optional<Users> users = usersRegister.findByEmail(principal.getName());
        return users.get();
    }

}
