package com.application.mamuca.controller;

import com.application.mamuca.entity.Contact;
import com.application.mamuca.entity.Order;
import com.application.mamuca.service.ContactService;
import com.application.mamuca.service.ContactServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class ContactController {

    @Autowired
    private ContactServiceImpl contactService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/submitContact", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String saveContact(@RequestParam MultiValueMap<String, String> formParams) {

        Contact contact = new Contact();

        contact.setFullName(formParams.getFirst("fullName"));
        contact.setEmail(formParams.getFirst("email"));
        contact.setPhone(formParams.getFirst("phone"));
        contact.setMessage(formParams.getFirst("message"));

        contactService.saveContact(contact);

        return "/contact";
    }

}
