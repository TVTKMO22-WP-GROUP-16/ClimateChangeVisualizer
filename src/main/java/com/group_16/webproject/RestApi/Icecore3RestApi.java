package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.Icecore3;
import java.util.List;
import com.group_16.webproject.Service.Icecore3Service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Icecore3RestApi {

    @Autowired
    Icecore3Service icecore3Service;

    @GetMapping("icecore3")

    public List<Icecore3> getAllIcecore3() {

        return icecore3Service.getAllIcecore3();
    }

}
