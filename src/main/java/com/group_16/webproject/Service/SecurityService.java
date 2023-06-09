package com.group_16.webproject.Service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.group_16.webproject.Entities.User;
import com.group_16.webproject.Repositories.UserRepository;

@Service
public class SecurityService {

    @Autowired
    UserRepository userRepository;

    @Value("${jwt.secret}")
    private String jwtKey;

    // Rekisteröinti
    // Luo uusi käyttäjä ja salasana
    public User register(String username, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = new User(username, encoder.encode(password));
        User exists = userRepository.findByUsername(username);
        if (exists != null && exists.getUsername() != null && !exists.getUsername().isEmpty()) {
            return null;
        }        
        userRepository.save(u);
        return u;
    }

    // Kirjautuminen
    // Tarkista käyttäjänimi ja salasana
    public String login(String username, String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        User u = userRepository.findByUsername(username);

        if (u == null || !encoder.matches(password, u.getPassword())) {
            return null;
        }

        Algorithm algorithm = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(u.getUsername()).sign(algorithm);
    }

    //Käyttäjien haku
    //Hae kaikki käyttäjät
    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }

    //Käyttäjän hakeminen nimellä
    //Hae käyttäjä nimellä
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    //Käyttäjän hakeminen id:llä
    //Hae käyttäjä id:llä
    public User getUser(Long id) {
        return userRepository.findById(id).get();
    }

    //Käyttäjän ID, käyttäjänimellä
    public Long getUserIdByUsername(String username) {
        User u = userRepository.findByUsername(username);
        return u.getId();
    }

    //Käyttäjän poistaminen
    //Poista käyttäjä
    public void deleteUser(Long id) {
        User u = userRepository.findById(id).get();
        if (u != null) {
            userRepository.delete(u);
        } else {
            throw new IllegalArgumentException("Käyttäjää ei löytynyt");
        }
    }

    //Käyttäjän poistaminen käyttäjänimellä
    //Poista käyttäjä käyttäjänimellä
    public void deleteUserByUsername(String username) {
        User u = userRepository.findByUsername(username);
        if (u != null) {
            userRepository.delete(u);
        } else {
            throw new IllegalArgumentException("Käyttäjää ei löytynyt");
        }
    }

    //Varmista JWT Tokenin oikeellisuus
    public String validateJwt(String jwtToken) {

        Algorithm algorithm = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(algorithm).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
            return null;
        }
    }

}
