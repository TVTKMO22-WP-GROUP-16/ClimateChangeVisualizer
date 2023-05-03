package com.group_16.webproject.Repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group_16.webproject.Entities.CustomViews;
import java.util.List;

@Repository
public interface CustomViewsRepository extends JpaRepository<CustomViews, Long> {

    Optional<CustomViews> findByUrl(String url);

    List<CustomViews> findByUsername(String username);
}
