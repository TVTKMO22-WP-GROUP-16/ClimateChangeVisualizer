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

    public List<Co2SubShare> getEnergyCo2SubShares() {
        co2SubShares = co2SubShareRepository.findAll();
        List<Co2SubShare> energyCo2SubShares = new ArrayList<>();
        for (Co2SubShare co2SubShare : co2SubShares) {
            if (co2SubShare.getPsector_fk().equals("Energy")) {
                energyCo2SubShares.add(co2SubShare);
            }
        }
        return energyCo2SubShares;

    }

    public List<Co2SubShare> getInduCo2SubShares() {
        co2SubShares = co2SubShareRepository.findAll();
        List<Co2SubShare> induCo2SubShares = new ArrayList<>();
        for (Co2SubShare co2SubShare : co2SubShares) {
            if (co2SubShare.getPsector_fk().equals("Industrial processes")) {
                induCo2SubShares.add(co2SubShare);
            }
        }
        return induCo2SubShares;
    }

    public List<Co2SubShare> getWasteCo2SubShares() {
        co2SubShares = co2SubShareRepository.findAll();
        List<Co2SubShare> WasteCo2SubShares = new ArrayList<>();
        for (Co2SubShare co2SubShare : co2SubShares) {
            if (co2SubShare.getPsector_fk().equals("Waste")) {
                WasteCo2SubShares.add(co2SubShare);
            }
        }
        return WasteCo2SubShares;
    }

    public List<Co2SubShare> getAFOLUCo2SubShares() {
        co2SubShares = co2SubShareRepository.findAll();
        List<Co2SubShare> AFOLUCo2SubShares = new ArrayList<>();
        for (Co2SubShare co2SubShare : co2SubShares) {
            if (co2SubShare.getPsector_fk().equals("AFOLU")) {
                AFOLUCo2SubShares.add(co2SubShare);
            }
        }
        return AFOLUCo2SubShares;
    }

}
