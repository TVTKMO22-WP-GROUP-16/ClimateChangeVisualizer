package com.group_16.webproject.Service;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Co2EBC;
import com.group_16.webproject.Repositories.Co2EBCRepository;

@Service
public class Co2EBCService {
    
    @Autowired
    private Co2EBCRepository co2EBCRepository;
    /*private List<Co2EBC> co2ebc = new ArrayList<>();

    public List<Co2EBC> getAllCo2EBC() {
        co2ebc = co2EBCRepository.findAll();
        return new ArrayList<>(co2ebc);
    }*/

    public List<Map<String, Object>> getAllCo2EBC() {
        List<Co2EBC> co2ebcList = co2EBCRepository.findAll();
        List<Map<String, Object>> result = new ArrayList<>();
        for (Co2EBC co2ebc : co2ebcList) {
            Map<String, Object> co2ebcMap = new HashMap<>();
            co2ebcMap.put("year", co2ebc.getYear());
            Map<String, Double> countryEmissions = new HashMap<>();
            try {
                BeanInfo beanInfo = Introspector.getBeanInfo(Co2EBC.class);
                PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
                for (PropertyDescriptor propertyDescriptor : propertyDescriptors) {
                    String propertyName = propertyDescriptor.getName();
                    if (!propertyName.equals("class") && !propertyName.equals("year")) {
                        Method readMethod = propertyDescriptor.getReadMethod();
                        countryEmissions.put(propertyName, (Double) readMethod.invoke(co2ebc));
                    }
                }
            } catch (IntrospectionException | IllegalAccessException | InvocationTargetException e) {
                e.printStackTrace();
            }
            co2ebcMap.put("countries", countryEmissions);
            result.add(co2ebcMap);
        }
        return result;
        }
}
