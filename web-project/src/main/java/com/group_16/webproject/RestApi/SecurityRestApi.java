package com.group_16.webproject.RestApi;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
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
        User u = securityService.register(username, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> userDetails) {
        String username = userDetails.get("username");
        String password = userDetails.get("password");
        String token = securityService.login(username, password);
        if (token == null) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
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

    /*
     * @DeleteMapping("users/{id}")
     * public ResponseEntity<?> deleteUser(@PathVariable Long id) {
     * securityService.deleteUser(id);
     * return new ResponseEntity<>("User deleted", HttpStatus.OK);
     * }
     */

    @DeleteMapping("users/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        securityService.deleteUserByUsername(username);
        return new ResponseEntity<>("User deleted", HttpStatus.OK);
    }

    // GetMapping
    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if (bearer.startsWith("Bearer")) {
            String token = bearer.split(" ")[1];
            String username = securityService.validateJwt(token);

            if (username != null) {
                return ResponseEntity.ok().body("{\"username\": \"" + username + "\"}");
            }
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
