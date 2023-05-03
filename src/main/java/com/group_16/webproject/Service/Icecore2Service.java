package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Icecore2;
import com.group_16.webproject.Repositories.Icecore2Repository;

@Service
public class Icecore2Service {

    @Autowired
    private Icecore2Repository icecore2Repository;
    private List<Icecore2> icecore2 = new ArrayList<>();

    public List<Icecore2> getAllIcecore2() {
        icecore2 = icecore2Repository.findAll();
        return new ArrayList<>(icecore2);
    }
}