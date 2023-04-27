package com.group_16.webproject.RestApi;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.Snyder;
import com.group_16.webproject.Service.SnyderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SnyderApi {

    @Autowired
    SnyderService snyderService;

    @GetMapping("snyder")

    public List<Snyder> getAllSnyder() {

        return snyderService.getAllSnyder();
    }

}
