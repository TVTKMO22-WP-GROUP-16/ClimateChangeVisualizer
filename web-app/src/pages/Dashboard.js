
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard({ handleLogout }) {
    const [username, setUsername] = useState('');
    const [customViews, setCustomViews] = useState([]);
    const [selectedView, setSelectedView] = useState('');
    const navigate = useNavigate();
    const handleViewChange = (e) => {
      setSelectedView(e.target.value);
    };
    const openSelectedView = () => {
      if (selectedView) {
        navigate(`/customviews/${selectedView}`);
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
            if (username) {
              fetchCustomViews();
          }
    }, [username]);

    const fetchCustomViews = async () => {
      try {
        const response = await axios.get(
          '/customviews/user/' + username,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setCustomViews(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const deleteCustomView = async (url) => {
      try {
        await axios.delete(`/customviews/${url}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // Remove the deleted custom view from the state
        setCustomViews(customViews.filter((view) => view.url !== url));
      } catch (error) {
        console.log("Error deleting custom view:", error);
      }
    };

  const handleUserDelete = () => {
      axios
        .delete("/users/" + username)
        .then((response) => {
          console.log("Käyttäjä poistettu", response.data);
          handleLogout();
          navigate("/login");
        })
        .catch((error) => {
          console.log("Käyttäjän poistaminen ei onnistunut:", error);
        });
  };

  const handleUserDeleteViews = () => {
    if (window.confirm("Haluatko varmasti poistaa käyttäjän?")) {
      axios
        .delete("/customviews/user/" + username)
        .then((response) => {
          console.log("Näkymät poistettu", response.data);
          handleUserDelete();
        })
        .catch((error) => {
          console.log("Näkymien poistaminen ei onnistunut", error);
        });
    }
  };

    return (
      <div className="dashboard">
        <div style={{ width: "500px", minWidth: "400px" }}>
          <h2>Tili</h2>
          <p>Käyttäjänimi: {username}</p>
          <h2>Visualisoinnit</h2>
          <div style={{ maxWidth: "100%" }}>
            <select value={selectedView} onChange={handleViewChange}
            style={{
              marginRigth: "10px",
              width: "50%",
              padding: "1.5vh 1vh",
              margin: "8px 8px",
              boxSizing: "border-box",
              border: " 2px solid black",
              borderRadius: "6px",
              boxShadow: "0 0 15px 4px rgba(0, 0, 0, 0.103)",
              minWidth: "10vw",
              maxWidth: "50vw",
            }}
            >
            <option value="">Valitse näkymä</option>
            {customViews.map((view) => (
            <option key={view.id} value={view.url}>
            {view.title}
            </option>
            ))}
            </select>
            <button className="button-19" style={{ marginLeft: "1vh" }} onClick={openSelectedView}>Avaa</button>
            <button className="button-19" style={{ marginLeft: "1vh" }} onClick={() => deleteCustomView(selectedView)}>
            Poista
            </button>
          </div>
        </div>
        <button className="button-19" style={{ marginTop: "3vh" }} onClick={handleLogout}>Kirjaudu ulos</button>        
        <button onClick={handleUserDeleteViews} style={{ fontWeight: "bold", backgroundColor: "darkred", marginTop: "6vh" }}>Poista käyttäjä</button>

      </div>
   
  );
}
