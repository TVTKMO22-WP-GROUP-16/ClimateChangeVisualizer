import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Rating, TextField, Typography, } from "@mui/material";

export default function CreateView() {
    return (
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormLabel sx={{ fontSize: "2rem" }}>Create view</FormLabel>
          <FormGroup
            sx={{
              padding: 2,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <TextField sx={{ paddingBottom: 2 }} variant="standard" placeholder="Title" />
            <FormLabel component="legend">Select Visualizations</FormLabel>
            <FormGroup row sx={{ paddingBottom: 2 }}>
              <FormControlLabel control={<Checkbox />} label="V1" />
              <FormControlLabel control={<Checkbox />} label="V2" />
              <FormControlLabel control={<Checkbox />} label="V3" />
              <FormControlLabel control={<Checkbox />} label="V4" />
              <FormControlLabel control={<Checkbox />} label="V5" />
            </FormGroup>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </FormGroup>
        </div>
      </form>
    );
  }