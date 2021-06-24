package com.medeasy.model;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Items items;
    @ManyToOne
    private Users users;
    private int quantity;

    //getters and setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Items getItems() {
        return items;
    }
    public void setItems(Items items) {
        this.items = items;
    }
    public Users getUsers() {
        return users;
    }
    public void setUsers(Users users) {
        this.users = users;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", items=" + items +
                ", users=" + users +
                ", quantity=" + quantity +
                '}';
    }
}
