package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.MaunaLoaYearly;
import com.group_16.webproject.Repositories.MaunaLoaYearlyRepository;

@Service
public class MaunaLoaYearlyService {

    @Autowired
    private MaunaLoaYearlyRepository maunaLoaYearlyRepository;
    private List<MaunaLoaYearly> maunaLoaYearly = new ArrayList<>();

    public List<MaunaLoaYearly> getAllMaunaLoaYearly() {
        maunaLoaYearly = maunaLoaYearlyRepository.findAll();
        return new ArrayList<>(maunaLoaYearly);
    }
}