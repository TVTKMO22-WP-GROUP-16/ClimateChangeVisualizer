package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.YearlyAnomalies;
import java.util.List;
import com.group_16.webproject.Service.YearlyAnomaliesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class YearlyAnomaliesRestApi {

    @Autowired
    YearlyAnomaliesService yearlyAnomaliesService;

    @GetMapping("yearlyanomalies")

    public List<YearlyAnomalies> getAllYearlyAnomalies() {

        return yearlyAnomaliesService.getAllYearlyAnomalies();
    }
}
