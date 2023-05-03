package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group_16.webproject.Entities.Snyder;
import com.group_16.webproject.Repositories.SnyderRepository;

@Service
public class SnyderService {

    @Autowired
    private SnyderRepository snyderRepository;
    private List<Snyder> snyder = new ArrayList<>();

    public List<Snyder> getAllSnyder() {
        snyder = snyderRepository.findAll();
        return new ArrayList<>(snyder);
    }

}
