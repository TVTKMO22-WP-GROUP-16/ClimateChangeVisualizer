package com.group_16.webproject.Entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(schema = "public", name = "hcyearly")
public class YearlyAnomalies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Date time;

    private float anomalyg;

    private float anomalys;

    private float anomalyn;

    public Date getTime() {
        return this.time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public float getAnomalyg() {
        return this.anomalyg;
    }

    public void setAnomalyg(float anomalyg) {
        this.anomalyg = anomalyg;
    }

    public float getAnomalys() {
        return this.anomalys;
    }

    public void setAnomalys(float anomalys) {
        this.anomalys = anomalys;
    }

    public float getAnomalyn() {
        return this.anomalyn;
    }

    public void setAnomalyn(float anomalyn) {
        this.anomalyn = anomalyn;
    }

}
