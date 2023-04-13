package com.group_16.webproject.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Co2Share;
import com.group_16.webproject.Repositories.Co2ShareRepository;



@Service
public class Co2SharesService {
    
    @Autowired
    private Co2ShareRepository co2ShareRepository;
    private List<Co2Share> co2Shares = new ArrayList<>();
    

    public List<Co2Share> getAllCo2Shares() {
        co2Shares = co2ShareRepository.findAll();
        return new ArrayList<>(co2Shares);
    }

}
