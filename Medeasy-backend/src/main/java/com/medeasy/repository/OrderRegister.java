package com.medeasy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medeasy.model.OrderHistory;

import java.util.List;

@Repository
public interface OrderRegister extends JpaRepository<OrderHistory, Long> {

    List<OrderHistory> findAllByUserId(Long id);
}
