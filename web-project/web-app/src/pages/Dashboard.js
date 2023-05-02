import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ handleLogout }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8090/private", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUserDelete = () => {
    if (window.confirm("Haluatko varmasti poistaa käyttäjän?")) {
      axios
        .delete("http://localhost:8090/users/" + username)
        .then((response) => {
          console.log("Käyttäjä poistettu", response.data);
          handleLogout();
          navigate("/login");
        })
        .catch((error) => {
          console.log("Käyttäjän poistaminen ei onnistunut:", error);
        });
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
     
      <div style ={{
        padding: "10vh",
        marginLeft: "10vw",
        marginRight: "7vw",
        border: "2px solid black",
        borderRadius: "25px",
        backgroundColor: "white"}}>
        <button onClick={handleLogout} class = "button-19">Kirjaudu ulos</button>
        <button onClick={handleUserDelete} class = "button-19">Poista käyttäjä</button>
        <h2>Tiedot</h2>
        <p>Käyttäjänimi: {username}</p>
      </div>
    </div>
  );
}
