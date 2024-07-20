package com.application.mamuca.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId")
    private int orderId;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "address")
    private String address;

    @Column(name = "scara")
    private String scara;

    @Column(name = "phone")
    private String phone;

    @Column(name = "specificatiiComanda")
    private String message;

    public Order(String fullName, String address, String phone, String scara, String message) {
        this.fullName = fullName;
        this.address = address;
        this.phone = phone;
        this.scara = scara;
        this.message = message;
    }

}
