package com.group_16.webproject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group_16.webproject.Repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /*
     * public List<User> getAllUsers() {
     * return userRepository.findAll();
     * }
     */

}
