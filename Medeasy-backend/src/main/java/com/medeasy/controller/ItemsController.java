package com.medeasy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medeasy.expection.ResourceNotFoundException;
import com.medeasy.model.Items;
import com.medeasy.repository.ItemsRegister;
import com.medeasy.service.CurrentUserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class ItemsController {

    @Autowired
    ItemsRegister itemsRegister;

    @GetMapping("/items")
    public List<Items> getAllItems()
    {
        return itemsRegister.findAll();
    }

    @PostMapping("/addDetails")
    public Items addItems(@Valid @RequestBody Items items)
    {
        return itemsRegister.save(items);
    }

    @GetMapping("/items/{id}")
    public Items getDetailsById(@PathVariable(value="id")Integer itemId)
    {
        return itemsRegister.findById(itemId).orElseThrow(()-> new ResourceNotFoundException("Details","Id",itemId));
    }

    @GetMapping("/category/{type}")
    public List<Items> getCategory(@PathVariable(value="type")String categoryType)
    {
        return itemsRegister.findAllByCategory(categoryType);
    }

    @GetMapping("/{cat}/{price1}/{price2}")
    public List<Items> getCategoryAndPrice(@PathVariable(value = "cat") String category,
                                           @PathVariable(value = "price1") Double price1,
                                           @PathVariable(value = "price2") Double price2)
    {
        return itemsRegister.findAllByCategoryAndUnitPriceBetween(category,price1,price2);
    }

    @GetMapping("/{price1}/{price2}")
    public List<Items> getPrice(@PathVariable(value = "price1") Double price1,
                                @PathVariable(value = "price2") Double price2)
    {
        return itemsRegister.findAllByUnitPriceBetween(price1, price2);
    }

    @GetMapping("search/{name}")
    public List<Items> getSearch(@PathVariable(value = "name")String name)
    {
        return itemsRegister.findByNameContaining(name);
    }

}
