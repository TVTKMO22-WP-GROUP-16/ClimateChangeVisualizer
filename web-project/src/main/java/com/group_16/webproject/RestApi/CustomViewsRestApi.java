package com.group_16.webproject.RestApi;

import org.springframework.web.bind.annotation.RequestHeader;
import com.group_16.webproject.Service.SecurityService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.CustomViews;
import com.group_16.webproject.Service.CustomViewsService;
import java.util.Optional;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomViewsRestApi {

    @Autowired
    private SecurityService securityService;

    @Autowired
    private CustomViewsService customViewsService;

    @PostMapping("/customviews")
    public CustomViews createCustomView(@RequestBody CustomViews customView) {
        return customViewsService.createCustomView(customView);
    }

    @GetMapping("/customviews/{url}")
    public CustomViews getCustomViewByUrl(@PathVariable("url") String url) {
        Optional<CustomViews> customViewOptional = customViewsService.getCustomViewByUrl(url);
        return customViewOptional.orElse(null);
    }

    @GetMapping("/customviews/user/{username}")
    public List<CustomViews> getCustomViewsByUsername(@PathVariable("username") String username) {
        return customViewsService.getCustomViewsByUsername(username);
    }

    @DeleteMapping("/customviews/{url}")
    public ResponseEntity<?> deleteCustomViewByUrl(@PathVariable("url") String url,
            @RequestHeader("Authorization") String bearer) {
        if (bearer.startsWith("Bearer")) {
            String token = bearer.split(" ")[1];
            String username = securityService.validateJwt(token);

            if (username != null) {
                if (customViewsService.isUserOwnerOfCustomView(username, url)) {
                    Optional<CustomViews> customViewOptional = customViewsService.getCustomViewByUrl(url);
                    customViewsService.deleteCustomView(customViewOptional.get());
                    return ResponseEntity.ok().build();
                } else {
                    return ResponseEntity.status(HttpStatus.FORBIDDEN)
                            .body("You do not have permission to delete this custom view");
                }
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
    }
}
