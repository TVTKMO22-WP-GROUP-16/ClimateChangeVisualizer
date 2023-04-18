package com.group_16.webproject.Entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "hcyearly")
public class GlobalAnomalies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Date Time; // primary key

    private float AnomalyGA;

    private float AnomalySA;

    private float AnomalyNA;

    public float getAnomalyGA() {
        return this.AnomalyGA;
    }

    public void setAnomalyGA(float AnomalyGA) {
        this.AnomalyGA = AnomalyGA;
    }

    public float getAnomalySA() {
        return this.AnomalySA;
    }

    public void setAnomalySA(float AnomalySA) {
        this.AnomalySA = AnomalySA;
    }

    public float getAnomalyNA() {
        return this.AnomalyNA;
    }

    public void setAnomalyNA(float AnomalyNA) {
        this.AnomalyNA = AnomalyNA;
    }
}
