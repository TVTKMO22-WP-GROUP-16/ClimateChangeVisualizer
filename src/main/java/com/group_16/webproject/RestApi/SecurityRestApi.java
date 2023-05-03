package com.group_16.webproject.RestApi;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.User;
//import com.group_16.webproject.Repositories.UserRepository;
import com.group_16.webproject.Service.SecurityService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SecurityRestApi {

    @Autowired
    SecurityService securityService;
    
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody Map<String, String> userDetails) {
        String username = userDetails.get("username");
        String password = userDetails.get("password");
        if (username != null && !username.isEmpty() && password !=null && !password.isEmpty()) {
            User u = securityService.register(username, password);
            if (u == null) {
                String bg = "Käyttäjä: " + username + " on jo olemassa";
                return new ResponseEntity<>(bg, HttpStatus.FORBIDDEN);
            }
            return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
        }
        return new ResponseEntity<>("Käyttäjätunnus tai salasana puuttuu", HttpStatus.FORBIDDEN);             
    }

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> userDetails) {
        String username = userDetails.get("username");
        String password = userDetails.get("password");
        String token = securityService.login(username, password);
        if (token == null) {
            return new ResponseEntity<>("Väärä käyttäjätunnus tai salasana", HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
    }

    @GetMapping("users")
    public ResponseEntity<Iterable<User>> getUsers() {
        return new ResponseEntity<>(securityService.getUsers(), HttpStatus.OK);
    }

    @GetMapping("users/{username}")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        return new ResponseEntity<>(securityService.findByUsername(username), HttpStatus.OK);
    }

    @GetMapping("users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return new ResponseEntity<>(securityService.getUser(id), HttpStatus.OK);
    }

    /*@DeleteMapping("users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        securityService.deleteUser(id);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }*/

    @DeleteMapping("users/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        securityService.deleteUserByUsername(username);
        return new ResponseEntity<>(username, HttpStatus.OK);
    }

    //GetMapping
    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if(bearer.startsWith("Bearer")){
            String token = bearer.split(" ")[1];
            String username = securityService.validateJwt(token);
            
            if(username != null) {
                return ResponseEntity.ok().body("{\"username\": \"" + username + "\"}");
            }
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
