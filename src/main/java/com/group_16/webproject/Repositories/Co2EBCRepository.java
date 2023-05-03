package com.group_16.webproject.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group_16.webproject.Entities.Co2EBC;

@Repository
public interface Co2EBCRepository extends JpaRepository<Co2EBC, Long> {

}
