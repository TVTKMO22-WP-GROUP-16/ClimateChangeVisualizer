package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.MonthlyAnomalies;
import com.group_16.webproject.Repositories.MonthlyAnomaliesRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Service
public class MonthlyAnomaliesService {

    @Autowired
    private MonthlyAnomaliesRepository monthlyAnomaliesRepository;
    private List<MonthlyAnomalies> monthlyAnomalies = new ArrayList<>();

    public List<MonthlyAnomalies> getAllMonthlyAnomalies() {
        monthlyAnomalies = monthlyAnomaliesRepository.findAll();
        return new ArrayList<>(monthlyAnomalies);
    }
}