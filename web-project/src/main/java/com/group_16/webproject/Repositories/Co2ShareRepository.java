package com.group_16.webproject.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.group_16.webproject.Entities.Co2Share;

@Repository
public interface Co2ShareRepository extends JpaRepository<Co2Share, Long>{
  
}
