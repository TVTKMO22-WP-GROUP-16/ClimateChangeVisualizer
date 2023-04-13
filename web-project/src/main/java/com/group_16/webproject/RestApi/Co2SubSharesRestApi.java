
package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.Co2SubShare;
import com.group_16.webproject.Service.Co2SubSharesService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Co2SubSharesRestApi {

    @Autowired
    Co2SubSharesService co2SubSharesService;
           
        
        @GetMapping("co2subshares")
        
        public List<Co2SubShare> getAllCo2SubShares() {
          
            return co2SubSharesService.getAllCo2SubShares();
        }
}
