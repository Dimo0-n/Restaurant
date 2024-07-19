package com.application.mamuca.service;

import com.application.mamuca.dto.UserDto;
import com.application.mamuca.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();
}
