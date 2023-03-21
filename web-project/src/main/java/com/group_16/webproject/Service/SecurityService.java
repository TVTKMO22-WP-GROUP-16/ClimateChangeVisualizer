package com.group_16.webproject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.group_16.webproject.Entities.User;
import com.group_16.webproject.Repositories.UserRepository;

@Service
public class SecurityService {
    
    @Autowired
    UserRepository userRepository;

    public User register(String username, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = new User(username, encoder.encode(password));
        userRepository.save(u);
        return u;
    }

    /*public User login(String username, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = userRepository.findByUsername(username).orElse(null);
        if (u == null) {
            return null;
        }

        return encoder.matches(password, u.getPassword()) ? u : null;

    }*/

}
