package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.MaunaLoaMonthly;
import java.util.List;
import com.group_16.webproject.Service.MaunaLoaMonthlyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MaunaLoaMonthlyRestApi {

    @Autowired
    MaunaLoaMonthlyService maunaLoaMonthlyService;

    @GetMapping("maunaloamonthly")

    public List<MaunaLoaMonthly> getAllMaunaLoaMonthly() {

        return maunaLoaMonthlyService.getAllMaunaLoaMonthly();
    }

}
