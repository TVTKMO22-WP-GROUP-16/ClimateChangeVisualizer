package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.MaunaLoaMonthly;
import com.group_16.webproject.Repositories.MaunaLoaMonthlyRepository;

@Service
public class MaunaLoaMonthlyService {

    @Autowired
    private MaunaLoaMonthlyRepository maunaLoaMonthlyRepository;
    private List<MaunaLoaMonthly> maunaLoaMonthly = new ArrayList<>();

    public List<MaunaLoaMonthly> getAllMaunaLoaMonthly() {
        maunaLoaMonthly = maunaLoaMonthlyRepository.findAll();
        return new ArrayList<>(maunaLoaMonthly);
    }
}