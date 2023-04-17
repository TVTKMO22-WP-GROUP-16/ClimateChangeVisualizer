
package com.group_16.webproject.RestApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group_16.webproject.Entities.Co2SubShare;
import com.group_16.webproject.Service.Co2SubSharesService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Co2SubSharesRestApi {

    @Autowired
    Co2SubSharesService co2SubSharesService;

    @GetMapping("co2subshares")

    public List<Co2SubShare> getAllCo2SubShares() {

        return co2SubSharesService.getAllCo2SubShares();
    }

    @GetMapping("co2subshares/Energy")
    public List<Co2SubShare> getEnergyCo2SubShares() {
        try {
            return co2SubSharesService.getEnergyCo2SubShares();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("co2subshares/Industrial processes")
    public List<Co2SubShare> getInduCo2SubShares() {
        try {
            return co2SubSharesService.getInduCo2SubShares();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("co2subshares/Waste")
    public List<Co2SubShare> getWasteCo2SubShares() {
        try {
            return co2SubSharesService.getWasteCo2SubShares();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @GetMapping("co2subshares/AFOLU")
    public List<Co2SubShare> getAFOLUCo2SubShares() {
        try {
            return co2SubSharesService.getAFOLUCo2SubShares();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

}
