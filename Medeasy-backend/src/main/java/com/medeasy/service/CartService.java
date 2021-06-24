package com.medeasy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medeasy.model.Cart;
import com.medeasy.model.Items;
import com.medeasy.model.OrderHistory;
import com.medeasy.model.Users;
import com.medeasy.repository.*;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    UsersRepositoryClass usersRepositoryClass;

    @Autowired
    CartRegister cartRegister;

    @Autowired
    ItemsRepositoryClass itemsRepositoryClass;

    @Autowired
    OrderRegister orderRegister;

    private ArrayList<Cart> getCartFromCurrentUser(Principal principal) {
        Optional<Users> users = usersRepositoryClass.getByEmail(principal.getName());
        ArrayList<Cart> cart = cartRegister.findAllByUsers(users);
        return cart;
    }

    public ArrayList<Cart> getEmail(Principal principal) {
        String email = principal.getName();
        Optional<Users> users = usersRepositoryClass.getByEmail(email);
        return cartRegister.findAllByUsers(users);
    }

    public String addItemToCart(Principal principal, Integer id) {
        Optional<Items> items = itemsRepositoryClass.getById(id);
        Optional<Users> users = usersRepositoryClass.getByEmail(principal.getName());
        ArrayList<Cart> carts = getCartFromCurrentUser(principal);
        for (int i=0;i<carts.size();i++) {
            Cart cartObj = carts.get(i);
            if(cartObj.getItems()==items.get()) {
                cartObj.setQuantity(cartObj.getQuantity()+1);
            cartRegister.saveAndFlush(cartObj);
            return "\"Quantity increased\"";
            }
        }

        Cart cartObject = new Cart();
        cartObject.setQuantity(1);
        cartObject.setItems(items.get());
        cartObject.setUsers(users.get());

        cartRegister.save(cartObject);
        return "\"Item added to cart\"";
    }

    @Transactional
    public String deleteItemFromCart(Integer itemId, Principal principal) {
        Optional<Items> items = itemsRepositoryClass.getById(itemId);
        Optional<Users> users = usersRepositoryClass.getByEmail(principal.getName());
        cartRegister.deleteByUsersAndItems(users, items);
        return "\"deletion completed\"";
    }

    public String increment(int value, Integer itemId, Principal principal) {
        ArrayList<Cart> carts = getCartFromCurrentUser(principal);
        Optional<Items> items = itemsRepositoryClass.getById(itemId);
        for (int i=0;i<carts.size();i++) {
            Cart cartObj = carts.get(i);
            if(cartObj.getItems()==items.get()) {
                int x = cartObj.getQuantity()+value;
                if(x>=1)
                {
                    cartObj.setQuantity(x);
                    cartRegister.save(cartObj);
                    return "\"Successful\"";
                }
            }
        }
        return "\"Unsuccessful\"";
    }

    public String decrement(int value, Integer itemId, Principal principal) {
        ArrayList<Cart> carts = getCartFromCurrentUser(principal);
        Optional<Items> items = itemsRepositoryClass.getById(itemId);
        for (int i=0;i<carts.size();i++) {
            Cart cartObj = carts.get(i);
            if(cartObj.getItems()==items.get()) {
                int x = cartObj.getQuantity()-value;
                if(x==1)
                {
                    cartObj.setQuantity(1);
                    cartRegister.save(cartObj);
                    return "\"Successful\"";
                } else if(x>1)
                {
                    cartObj.setQuantity(x);
                    cartRegister.save(cartObj);
                    return "\"Successful\"";
                }
            }
        }
        return "\"Unsuccessful\"";
    }

    public List<OrderHistory> checkout(Principal principal) {
        Optional<Users> users = usersRepositoryClass.getByEmail(principal.getName());
        ArrayList<Cart> cartList = cartRegister.findAllByUsers(users);
        for (Cart cart: cartList)
        {
            OrderHistory orderHistory = new OrderHistory();
            orderHistory.setUserId((long) cart.getUsers().getId());
            orderHistory.setQuantity(cart.getQuantity());
            orderHistory.setPrice(cart.getItems().getUnitPrice());
            orderHistory.setItemName(cart.getItems().getName());
            orderHistory.setDate(new Date());
            cartRegister.delete(cart);
            orderRegister.saveAndFlush(orderHistory);
        }
        return orderRegister.findAllByUserId((long) users.get().getId());
    }

    public List<OrderHistory> order(Principal principal) {
        Optional<Users> users = usersRepositoryClass.getByEmail(principal.getName());
        ArrayList<Cart> cartList = cartRegister.findAllByUsers(users);
        for (Cart cart: cartList)
        {
            OrderHistory orderHistory = new OrderHistory();
            orderHistory.setUserId((long) cart.getUsers().getId());
            orderHistory.setQuantity(cart.getQuantity());
            orderHistory.setPrice(cart.getItems().getUnitPrice());
            orderHistory.setItemName(cart.getItems().getName());
            orderHistory.setDate(new Date());
            orderRegister.saveAndFlush(orderHistory);
        }
        return orderRegister.findAllByUserId((long) users.get().getId());
    }
}
