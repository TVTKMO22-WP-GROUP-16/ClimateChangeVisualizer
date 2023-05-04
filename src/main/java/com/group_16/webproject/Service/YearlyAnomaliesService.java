package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.YearlyAnomalies;
import com.group_16.webproject.Repositories.YearlyAnomaliesRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Service
public class YearlyAnomaliesService {

    @Autowired
    private YearlyAnomaliesRepository yearlyAnomaliesRepository;
    private List<YearlyAnomalies> yearlyAnomalies = new ArrayList<>();

    public List<YearlyAnomalies> getAllYearlyAnomalies() {
        yearlyAnomalies = yearlyAnomaliesRepository.findAll();
        return new ArrayList<>(yearlyAnomalies);
    }
}