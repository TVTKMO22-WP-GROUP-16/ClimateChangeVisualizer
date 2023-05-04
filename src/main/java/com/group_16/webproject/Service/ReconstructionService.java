package com.group_16.webproject.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.Reconstruction;
import com.group_16.webproject.Repositories.ReconstructionRepository;

@Service
public class ReconstructionService {

    @Autowired
    private ReconstructionRepository reconstructionRepository;
    private List<Reconstruction> reconstruction = new ArrayList<>();

    public List<Reconstruction> getAllReconstruction() {
        reconstruction = reconstructionRepository.findAll();
        return new ArrayList<>(reconstruction);
    }
}