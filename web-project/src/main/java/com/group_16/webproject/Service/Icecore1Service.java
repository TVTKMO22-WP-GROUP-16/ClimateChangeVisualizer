package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Icecore1;
import com.group_16.webproject.Repositories.Icecore1Repository;

@Service
public class Icecore1Service {

    @Autowired
    private Icecore1Repository icecore1Repository;
    private List<Icecore1> icecore1 = new ArrayList<>();

    public List<Icecore1> getAllIcecore1() {
        icecore1 = icecore1Repository.findAll();
        return new ArrayList<>(icecore1);
    }
}