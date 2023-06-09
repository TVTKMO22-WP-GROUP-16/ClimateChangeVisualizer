package com.group_16.webproject.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(schema = "public", name = "psector")
public class Co2Share {

    @Id
    public int id;
    private String sector;
    private float shares;

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public float getShare() {
        return this.shares;
    }

    public void setShare(float shares) {
        this.shares = shares;
    }
}