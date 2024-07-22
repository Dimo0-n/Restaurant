package com.application.mamuca.controller;

import com.application.mamuca.entity.Order;
import com.application.mamuca.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@Controller
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/submitOrder", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String submitOrder(@RequestParam MultiValueMap<String, String> formParams) {

        Order order = new Order();

        order.setFullName(formParams.getFirst("fullName"));
        order.setAddress(formParams.getFirst("address"));
        order.setPhone(formParams.getFirst("phone"));
        order.setScara(formParams.getFirst("scara"));
        order.setMessage(formParams.getFirst("message"));

        orderService.newOrder(order);

        return "/index";
    }

}
