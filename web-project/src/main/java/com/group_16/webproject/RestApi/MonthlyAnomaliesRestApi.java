package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.MonthlyAnomalies;
import java.util.List;
import com.group_16.webproject.Service.MonthlyAnomaliesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MonthlyAnomaliesRestApi {

    @Autowired
    MonthlyAnomaliesService monthlyAnomaliesService;

    @GetMapping("monthlyanomalies")
    public List<MonthlyAnomalies> getAllMonthlyAnomalies() {
        return monthlyAnomaliesService.getAllMonthlyAnomalies();
    }
}
