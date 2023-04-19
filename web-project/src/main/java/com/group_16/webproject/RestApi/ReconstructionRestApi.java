package com.group_16.webproject.RestApi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.group_16.webproject.Entities.Reconstruction;
import java.util.List;
import com.group_16.webproject.Service.ReconstructionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReconstructionRestApi {

    @Autowired
    ReconstructionService reconstructionService;

    @GetMapping("reconstruction")
    public List<Reconstruction> getAllReconstruction() {
        return reconstructionService.getAllReconstruction();
    }
}