package com.group_16.webproject.RestApi;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Service.Co2EBCService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Co2EBCRestApi {
    @Autowired
    Co2EBCService co2EBCService;

    @GetMapping("co2ebc")
    public List<Map<String, Object>> getAllCo2EBC() {
        return co2EBCService.getAllCo2EBC();
    }

}
