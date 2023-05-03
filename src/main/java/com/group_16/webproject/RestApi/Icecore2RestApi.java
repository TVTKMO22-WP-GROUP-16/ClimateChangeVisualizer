package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.Icecore2;
import java.util.List;
import com.group_16.webproject.Service.Icecore2Service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Icecore2RestApi {

    @Autowired
    Icecore2Service icecore2Service;

    @GetMapping("icecore2")

    public List<Icecore2> getAllIcecore2() {

        return icecore2Service.getAllIcecore2();
    }

}
