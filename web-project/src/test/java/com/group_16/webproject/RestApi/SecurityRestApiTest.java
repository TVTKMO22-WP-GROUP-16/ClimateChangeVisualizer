package com.group_16.webproject.RestApi;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.group_16.webproject.RestApi.SecurityRestApi;
import com.group_16.webproject.Service.SecurityService;
import com.group_16.webproject.Entities.User;

public class SecurityRestApiTest {

    @Mock
    private SecurityService securityService;

    @InjectMocks
    private SecurityRestApi securityRestApi;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    public void testSecurityRestApiRegisterSuccess() {
        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", "testikäyttäjä");
        userDetails.put("password", "testipassu");
        User u = new User();
        u.setUsername("testikäyttäjä");
        u.setPassword("testipassu");
        when(securityService.register("testikäyttäjä", "testipassu")).thenReturn(u);
        ResponseEntity<String> response = securityRestApi.register(userDetails);
        assertEquals("testikäyttäjä", response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiUserExists() {
        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", "testikäyttäjä");
        userDetails.put("password", "testipassu");
        when(securityService.register("testikäyttäjä", "testipassu")).thenReturn(null);
        ResponseEntity<String> response = securityRestApi.register(userDetails);
        assertEquals("Käyttäjä: testikäyttäjä on jo olemassa", response.getBody());
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiNoUsername() {
        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("", "password");
        ResponseEntity<String> response = securityRestApi.register(userDetails);
        assertEquals("Käyttäjätunnus tai salasana puuttuu", response.getBody());
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiNoPw() {
        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", "");
        ResponseEntity<String> response = securityRestApi.register(userDetails);
        assertEquals("Käyttäjätunnus tai salasana puuttuu", response.getBody());
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiNoInfo() {
        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("", "");
        ResponseEntity<String> response = securityRestApi.register(userDetails);
        assertEquals("Käyttäjätunnus tai salasana puuttuu", response.getBody());
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiLoginSuccess() {
        String username = "testikäyttäjä";
        String password = "testipassu";
        String token = "testitokeni";
        when(securityService.login(username, password)).thenReturn(token);

        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", username);
        userDetails.put("password", password);

        ResponseEntity<String> response = securityRestApi.login(userDetails);
        assertEquals(token, response.getBody());
    }

    @Test
    public void testSecurityRestApiLoginWrongPw() {
        String username = "testikäyttäjä";
        String password = "testipassu";
        when(securityService.login(username, password)).thenReturn(null);

        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", username);
        userDetails.put("password", password);

        ResponseEntity<String> response = securityRestApi.login(userDetails);
        assertEquals("Väärä käyttäjätunnus tai salasana", response.getBody());
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiLoginNoUsername() {
        String password = "testipassu";

        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("password", password);

        ResponseEntity<String> response = securityRestApi.login(userDetails);

        assertEquals("Väärä käyttäjätunnus tai salasana", response.getBody());
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiLoginNoPw() {
        String username = "testikäyttäjä";

        Map<String, String> userDetails = new HashMap<>();
        userDetails.put("username", username);

        ResponseEntity<String> response = securityRestApi.login(userDetails);

        assertEquals("Väärä käyttäjätunnus tai salasana", response.getBody());
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    public void testSecurityRestApiNoPwNoUsername() {
        Map<String, String> userDetails = new HashMap<>();

        ResponseEntity<String> response = securityRestApi.login(userDetails);

        assertEquals("Väärä käyttäjätunnus tai salasana", response.getBody());
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
    }

    @Test
    public void testDeleteUserSuccess() {

        String username = "testikäyttäjä";

        ResponseEntity<?> response = securityRestApi.deleteUser(username);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(username, response.getBody());
    }

}