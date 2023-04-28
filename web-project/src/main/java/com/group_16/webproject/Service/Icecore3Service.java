package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Icecore3;
import com.group_16.webproject.Repositories.Icecore3Repository;

@Service
public class Icecore3Service {

    @Autowired
    private Icecore3Repository icecore3Repository;
    private List<Icecore3> icecore3 = new ArrayList<>();

    public List<Icecore3> getAllIcecore3() {
        icecore3 = icecore3Repository.findAll();
        return new ArrayList<>(icecore3);
    }
}