import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Rating, TextField, Typography, RadioGroup, Radio } from "@mui/material";


export default function CreateView() {
    // State for layout, initialized with 'stacked' as default
    const [layout, setLayout] = useState("stacked");
    // State for checkboxes, initialized with all values set to false
    const [checked, setChecked] = useState({
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
    });
    // State for form data, initialized with empty values
    const [formData, setFormData] = useState({
      title: "",
      visualizations: [],
      descriptions: [],
      layout: "stacked",
    });
  
    // Handle checkboxes changes
    const handleChange = (event) => {
      // Update the checked state
      setChecked({
        ...checked,
        [event.target.name]: event.target.checked,
      });
  
      // Update the formData state with the selected visualization
      if (event.target.checked) {
        setFormData({
          ...formData,
          visualizations: [...formData.visualizations, event.target.name],
        });
      } else {
        // Remove the unchecked visualization from formData
        setFormData({
          ...formData,
          visualizations: formData.visualizations.filter((v) => v !== event.target.name),
        });
      }
    };
  
    // Handle description input changes
    const handleInputChange = (event, index) => {
      let newDescriptions = [...formData.descriptions];
      newDescriptions[index] = event.target.value;
      // Update the formData state with the new descriptions
      setFormData({
        ...formData,
        descriptions: newDescriptions,
      });
    };
  
    // Handle title input change
    const handleTitleChange = (event) => {
      setFormData({
        ...formData,
        title: event.target.value,
      });
    };
  
    // Handle layout radio buttons change
    const handleLayoutChange = (event) => {
      setLayout(event.target.value);
      setFormData({
        ...formData,
        layout: event.target.value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Prepare the submitted data
      const submittedData = {
        title: formData.title,
        visualizations: formData.visualizations.join(","),
        layout: formData.layout === "stacked" ? 0 : 1,
      };
  
      // Add descriptions as individual fields
      formData.descriptions.forEach((description, index) => {
        submittedData[`description${index + 1}`] = description;
      });
  
      // Log the submitted data
      console.log("Form submitted:", submittedData);
    };
  
    // Render the CreateView component
    return (
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <FormLabel sx={{ fontSize: "2rem" }}>Create view</FormLabel>
        <FormGroup sx={{ padding: 2, borderRadius: 2, border: "1px solid", borderColor: "primary.main"}}>
        <TextField sx={{ paddingBottom: 2 }} variant="standard" placeholder="Title" value={formData.title} onChange={handleTitleChange} />
          <FormLabel component="legend">Select Visualizations</FormLabel>
          <FormGroup row sx={{ paddingBottom: 2 }}>
            <FormControlLabel control={<Checkbox checked={checked.v1} onChange={handleChange} name="v1" />}label="V1"/>
            <FormControlLabel control={<Checkbox checked={checked.v2} onChange={handleChange} name="v2" />}label="V2"/>
            <FormControlLabel control={<Checkbox checked={checked.v3} onChange={handleChange} name="v3" />}label="V3"/>
            <FormControlLabel control={<Checkbox checked={checked.v4} onChange={handleChange} name="v4" />}label="V4"/>
            <FormControlLabel control={<Checkbox checked={checked.v5} onChange={handleChange} name="v5" />}label="V5"/>
          </FormGroup>
          <FormGroup sx={{ paddingBottom: 2, alignItems: "center", width: "100%", display: 'flex', flexDirection: 'column' }}>
          {checked.v1 && <FormControlLabel control={<TextField placeholder="Description 1" onChange={(e) => handleInputChange(e, 0)} />} />}
          {checked.v2 && <FormControlLabel control={<TextField placeholder="Description 2" onChange={(e) => handleInputChange(e, 1)} />} />}
          {checked.v3 && <FormControlLabel control={<TextField placeholder="Description 3" onChange={(e) => handleInputChange(e, 2)} />} />}
          {checked.v4 && <FormControlLabel control={<TextField placeholder="Description 4" onChange={(e) => handleInputChange(e, 3)} />} />}
          {checked.v5 && <FormControlLabel control={<TextField placeholder="Description 5" onChange={(e) => handleInputChange(e, 4)} />} />}
          </FormGroup>
          <FormLabel component="legend">Select layout</FormLabel>
          <RadioGroup value={layout} onChange={handleLayoutChange} sx={{ paddingBottom: 2 }}>
            <FormControlLabel value="stacked" control={<Radio />} label="Stacked" />
            <FormControlLabel value="side-by-side" control={<Radio />} label="Side-by-side" />
          </RadioGroup>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </FormGroup>
      </div>
    </form>
  );
}
