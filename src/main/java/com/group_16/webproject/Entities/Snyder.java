package com.group_16.webproject.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(schema = "public", name = "snyder")
public class Snyder {

    @Id
    public int time;
    private double fifty;
    private double cd;
    private double cdu;
    private String event;

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getFifty() {
        return this.fifty;
    }

    public void setFifty(double fifty) {
        this.fifty = fifty;
    }

    public double getCd() {
        return this.cd;
    }

    public void setCd(double cd) {
        this.cd = cd;
    }

    public double getCdu() {
        return this.cdu;
    }

    public void setCdu(double cdu) {
        this.cdu = cdu;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }
}