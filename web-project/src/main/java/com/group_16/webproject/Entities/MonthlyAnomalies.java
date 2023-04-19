package com.group_16.webproject.Entities;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(schema = "public", name = "HCmonthly")
public class MonthlyAnomalies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Date time;

    private double anomalyg;

    private double anomalyn;

    private double anomalys;

    public Date getTime() {
        return this.time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public double getAnomalyg() {
        return this.anomalyg;
    }

    public void setAnomalyg(double anomalyg) {
        this.anomalyg = anomalyg;
    }

    public double getAnomalyn() {
        return this.anomalyn;
    }

    public void setAnomalyn(double anomalyn) {
        this.anomalyn = anomalyn;
    }

    public double getAnomalys() {
        return this.anomalys;
    }

    public void setAnomalys(double anomalys) {
        this.anomalys = anomalys;
    }

}