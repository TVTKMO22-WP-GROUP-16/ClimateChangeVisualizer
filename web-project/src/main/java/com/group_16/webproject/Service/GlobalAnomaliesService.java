package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.GlobalAnomalies;
import com.group_16.webproject.Repositories.GlobalAnomaliesRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Service
public class GlobalAnomaliesService {

    @Autowired
    private GlobalAnomaliesRepository globalAnomaliesRepository;
    private List<GlobalAnomalies> globalAnomalies = new ArrayList<>();

    public List<GlobalAnomalies> getAllGlobalAnomalies() {
        globalAnomalies = globalAnomaliesRepository.findAll();
        return new ArrayList<>(globalAnomalies);
    }
}