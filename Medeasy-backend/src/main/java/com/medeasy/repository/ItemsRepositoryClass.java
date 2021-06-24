package com.medeasy.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.medeasy.model.Items;

import java.util.ArrayList;
import java.util.Optional;

@Component
public class ItemsRepositoryClass {

    @Autowired
    ItemsRegister itemsRegister;

    public boolean addProduct(Items items)
    {
        try {
            System.out.println("Adding a product");
            itemsRegister.save(items);
            System.out.println("product added");
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }

    public ArrayList<Items> getAllProcducts() {
        return (ArrayList<Items>) itemsRegister.findAll();
    }

    public Optional<Items> getFields(Integer id) {
        return itemsRegister.findById(id);
    }

    public ArrayList<Items> getByCategory(String category) {
        return (ArrayList<Items>) itemsRegister.findAllByCategory(category);
    }

    public ArrayList<Items> getByCategoryAndPrice(String category, Double p1, Double p2) {
        return (ArrayList<Items>) itemsRegister.findAllByCategoryAndUnitPriceBetween(category, p1, p2);
    }

    public Optional<Items> getById(Integer id) {
        return itemsRegister.findById(id);
    }
}
