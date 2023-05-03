package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.Icecore1;
import java.util.List;
import com.group_16.webproject.Service.Icecore1Service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Icecore1RestApi {

    @Autowired
    Icecore1Service icecore1Service;

    @GetMapping("icecore1")

    public List<Icecore1> getAllIcecore1() {

        return icecore1Service.getAllIcecore1();
    }

}
