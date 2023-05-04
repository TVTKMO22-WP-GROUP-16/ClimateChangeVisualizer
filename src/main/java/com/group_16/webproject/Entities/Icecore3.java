package com.group_16.webproject.Entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(schema = "public", name = "icecore3")
public class Icecore3 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id; // primary key

    private Date year;

    private float co2;

    public Date getTime() {
        return this.year;
    }

    public void setTime(Date year) {
        this.year = year;
    }

    public float getCo2() {
        return this.co2;
    }

    public void setCo2(float co2) {
        this.co2 = co2;
    }
}
