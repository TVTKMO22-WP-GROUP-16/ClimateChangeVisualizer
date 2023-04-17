package com.group_16.webproject.RestApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.Co2Share;
import com.group_16.webproject.Service.Co2SharesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Co2SharesRestApi {

    @Autowired
    Co2SharesService co2SharesService;

    @GetMapping("co2shares")

    public List<Co2Share> getAllCo2Shares() {

        return co2SharesService.getAllCo2Shares();
    }

}
