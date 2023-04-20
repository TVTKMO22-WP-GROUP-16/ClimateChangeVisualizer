package com.group_16.webproject.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group_16.webproject.Entities.MonthlyAnomalies;

@Repository
public interface MonthlyAnomaliesRepository extends JpaRepository<MonthlyAnomalies, Long> {

}