package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group_16.webproject.Entities.Co2SubShare;
import com.group_16.webproject.Repositories.Co2SubShareRepository;

@Service
public class Co2SubSharesService {
    @Autowired
    private Co2SubShareRepository co2SubShareRepository;
    private List<Co2SubShare> co2SubShares = new ArrayList<>();

    public List<Co2SubShare> getAllCo2SubShares() {
        co2SubShares = co2SubShareRepository.findAll();
        return new ArrayList<>(co2SubShares);
    }

   

}
