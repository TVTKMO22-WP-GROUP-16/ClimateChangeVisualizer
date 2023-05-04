import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, TextField, RadioGroup, Radio } from "@mui/material";
import { Link } from "react-router-dom";


export default function CreateView() {
    // State for username
    const [username, setUsername] = useState('');
    // State for createdUrl
    const [createdUrl, setCreatedUrl] = useState(null);
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
    // State for form validation, initialized with false
    const [formValid, setFormValid] = useState(false);
    
    const validateForm = () => {
      const atLeastOneVisualization = Object.values(checked).some((value) => value === true);
      const titleLengthValid = formData.title.length >= 3;
  
      return atLeastOneVisualization && titleLengthValid;
    };

    useEffect(() => {
      setFormValid(validateForm());
    }, [formData, checked]);
  
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

    // Generate a randomized url for the view. (Pitää varmaan implementoida backendin puolelle joku metodi base64 jne jos aikaa.)
    const generateRandomString = (length) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      };
  
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prepare the submitted data
        const submittedData = {
          title: formData.title,
          visualizations: formData.visualizations.join(","),
          layout: formData.layout === "stacked" ? 1 : 0,
          username: username, // Add the current username
          url: generateRandomString(15), // Add the randomly generated "url" field
        };
      
        // Add descriptions as individual fields
        formData.descriptions.forEach((description, index) => {
          submittedData[`description${index + 1}`] = description;
        });
      
        // Send a POST request to the backend with the submitted data
        try {
          const response = await axios.post("/customviews", submittedData);
          console.log("Form submitted and saved:", response.data);
          setCreatedUrl(submittedData.url); // Set the created url to the state
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      
      useEffect(() => {
        axios.get('/private', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((response) => {
                setUsername(response.data.username);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  
    // Render the CreateView component
    return (
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <FormLabel sx={{ fontSize: "2rem" }}>Luo näkymä</FormLabel>
        <FormGroup sx={{ padding: 2, borderRadius: 2, border: "1px solid", borderColor: "primary.main", backgroundColor: "rgb(247, 250, 249)" }}>
        <TextField sx={{ paddingBottom: 2 }}  inputProps={{ maxLength: 45 }} variant="standard" placeholder="Näkymän nimi" value={formData.title} onChange={handleTitleChange} />
          <FormLabel component="legend">Valitse visualisaatiot</FormLabel>
          <FormGroup row sx={{ paddingBottom: 2 }}>
            <FormControlLabel control={<Checkbox checked={checked.v1} onChange={handleChange} name="v1" />}label="V1"/>
            <FormControlLabel control={<Checkbox checked={checked.v2} onChange={handleChange} name="v2" />}label="V2"/>
            <FormControlLabel control={<Checkbox checked={checked.v3} onChange={handleChange} name="v3" />}label="V3"/>
            <FormControlLabel control={<Checkbox checked={checked.v4} onChange={handleChange} name="v4" />}label="V4"/>
            <FormControlLabel control={<Checkbox checked={checked.v5} onChange={handleChange} name="v5" />}label="V5"/>
          </FormGroup>
          <FormGroup sx={{ paddingBottom: 2, alignItems: "center", width: "100%", display: 'flex', flexDirection: 'column' }}>
          {checked.v1 && <FormControlLabel control={<TextField placeholder="Kuvaus 1" inputProps={{ maxLength: 128 }} onChange={(e) => handleInputChange(e, 0)} />} />}
          {checked.v2 && <FormControlLabel control={<TextField placeholder="Kuvaus 2" inputProps={{ maxLength: 128 }} onChange={(e) => handleInputChange(e, 1)} />} />}
          {checked.v3 && <FormControlLabel control={<TextField placeholder="Kuvaus 3" inputProps={{ maxLength: 128 }} onChange={(e) => handleInputChange(e, 2)} />} />}
          {checked.v4 && <FormControlLabel control={<TextField placeholder="Kuvaus 4" inputProps={{ maxLength: 128 }} onChange={(e) => handleInputChange(e, 3)} />} />}
          {checked.v5 && <FormControlLabel control={<TextField placeholder="Kuvaus 5" inputProps={{ maxLength: 128 }} onChange={(e) => handleInputChange(e, 4)} />} />}
          </FormGroup>
          <FormLabel component="legend">Valitse asettelu</FormLabel>
          <RadioGroup value={layout} onChange={handleLayoutChange} sx={{ paddingBottom: 2 }}>
            <FormControlLabel value="stacked" control={<Radio />} label="Päällekkäin" />
            <FormControlLabel value="side-by-side" control={<Radio />} label="Vierekkäin" />
          </RadioGroup>
          <Button type="submit" variant="outlined" disabled={!formValid}>
            Luo näkymä
          </Button>
        </FormGroup>
      {createdUrl && ( <Button component={Link} to={`/customviews/${createdUrl}`} variant="contained" color="primary">
      Avaa luotu näkymä
      </Button>)}
      </div>
    </form>
  );
}
