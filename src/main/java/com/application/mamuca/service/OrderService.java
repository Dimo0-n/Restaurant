package com.application.mamuca.service;

import com.application.mamuca.entity.Order;
import com.application.mamuca.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order newOrder(Order order) {
        return orderRepository.save(order);
    }

}
