package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.MaunaLoaYearly;
import java.util.List;
import com.group_16.webproject.Service.MaunaLoaYearlyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MaunaLoaYearlyRestApi {

    @Autowired
    MaunaLoaYearlyService maunaLoaYearlyService;

    @GetMapping("maunaloayearly")

    public List<MaunaLoaYearly> getAllMaunaLoaYearly() {

        return maunaLoaYearlyService.getAllMaunaLoaYearly();
    }

}
