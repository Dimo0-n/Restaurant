package com.application.mamuca.controller;

import ch.qos.logback.core.model.Model;
import com.application.mamuca.entity.Order;
import com.application.mamuca.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

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

        return "index";
    }

//    @ResponseStatus(HttpStatus.CREATED)
//    @PostMapping(value = "/submitOrder", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
//    public ResponseEntity<String> submitOrder(@RequestParam MultiValueMap<String, String> formParams) {
//
//        return ResponseEntity.ok("Order submitted successfully");
//    }

}
