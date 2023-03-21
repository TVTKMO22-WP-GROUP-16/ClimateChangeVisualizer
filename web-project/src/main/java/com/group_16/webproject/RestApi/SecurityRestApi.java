package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.User;
import com.group_16.webproject.Repositories.UserRepository;
import com.group_16.webproject.Service.SecurityService;

@RestController
public class SecurityRestApi {

    @Autowired
    SecurityService securityService;
    
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
        User u = securityService.register(username, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }

}
