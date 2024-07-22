package com.application.mamuca.service;

import com.application.mamuca.dto.UserDto;
import com.application.mamuca.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();

    UserDto getUserByEmail(String email);

    boolean authentication(String email, String password);

    boolean checkPassword(String password, String password1);
}
