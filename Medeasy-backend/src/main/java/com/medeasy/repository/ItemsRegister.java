package com.medeasy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medeasy.model.Items;

import java.util.List;

@Repository
public interface ItemsRegister extends JpaRepository<Items, Integer> {

    public List<Items> findAllByCategory(String var1);

    public List<Items> findAllByCategoryAndUnitPriceBetween(String category, Double p1, Double p2);

    public List<Items> findAllByUnitPriceBetween(Double p1, Double p2);

    public List<Items> findByNameContaining(String name);

}
