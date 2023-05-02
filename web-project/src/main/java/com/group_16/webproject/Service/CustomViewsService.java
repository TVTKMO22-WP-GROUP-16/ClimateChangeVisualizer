package com.group_16.webproject.Service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group_16.webproject.Entities.CustomViews;
import com.group_16.webproject.Repositories.CustomViewsRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomViewsService {

    @Transactional
    public CustomViews createCustomView(CustomViews customView) {
        return customViewsRepository.save(customView);
    }

    @Autowired
    private CustomViewsRepository customViewsRepository;

    public Optional<CustomViews> getCustomViewByUrl(String url) {
        return customViewsRepository.findByUrl(url);
    }
}
