package com.group_16.webproject.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(schema = "public", name = "sub_sector")
public class Co2SubShare {
    @Id
    public int id;
    private String sector;
    private float shares;
    private String psector_fk;

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

    public String getPsector_fk() {
        return this.psector_fk;
    }

    public void setPsector_fk(String psector_fk) {
        this.psector_fk = psector_fk;
    }

}
