package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.CustomViews;
import com.group_16.webproject.Service.CustomViewsService;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomViewsRestApi {

    @Autowired
    private CustomViewsService customViewsService;

    @GetMapping("/customviews/{url}")
    public CustomViews getCustomViewByUrl(@PathVariable("url") String url) {
        Optional<CustomViews> customViewOptional = customViewsService.getCustomViewByUrl(url);
        return customViewOptional.orElse(null);
    }
}
