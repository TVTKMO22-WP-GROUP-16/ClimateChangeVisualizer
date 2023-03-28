package com.group_16.webproject.RestApi;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.User;
import com.group_16.webproject.Repositories.UserRepository;
import com.group_16.webproject.Service.SecurityService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class SecurityRestApi {

    @Autowired
    SecurityService securityService;
    
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody Map<String, String> userDetails) {
        String username = userDetails.get("username");
        String password = userDetails.get("password");
        User u = securityService.register(username, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        String token = securityService.login(username, password);
        if (token == null) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
        } else {

            return new ResponseEntity<>(token, HttpStatus.OK);
        }
    }

    //GetMapping
    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if(bearer.startsWith("Bearer")){
            String token = bearer.split(" ")[1];
            String username = securityService.validateJwt(token);
            
            if(username != null) {
                return new ResponseEntity<>("Private data for "+ username, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
