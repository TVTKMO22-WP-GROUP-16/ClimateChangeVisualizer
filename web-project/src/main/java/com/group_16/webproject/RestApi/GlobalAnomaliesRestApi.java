package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.GlobalAnomalies;
import java.util.List;
import com.group_16.webproject.Service.GlobalAnomaliesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GlobalAnomaliesRestApi {

    @Autowired
    GlobalAnomaliesService globalAnomaliesService;

    @GetMapping("globalanomalies")

    public List<GlobalAnomalies> getAllGlobalAnomalies() {

        return globalAnomaliesService.getAllGlobalAnomalies();
    }
}
