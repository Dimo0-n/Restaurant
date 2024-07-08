package com.application.mamuca.controller;

import ch.qos.logback.core.model.Model;
import com.application.mamuca.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/submitOrder")
    public String submitForm(
            @RequestParam("name") String fullName,
            @RequestParam("address") String address,
            @RequestParam("phone") String phone,
            @RequestParam("scara") String scara,
            @RequestParam("message") String message,
            Model model) {

        orderService.newOrder(fullName, address, phone, scara, message);
        return "index";
    }

}
