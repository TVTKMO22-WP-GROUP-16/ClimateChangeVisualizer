
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
        axios.get('http://localhost:8090/private', {
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
          'http://localhost:8090/customviews/user/' + username,
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
        await axios.delete(`http://localhost:8090/customviews/${url}`, {
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
        <div>
          <h2>Tiedot</h2>
          <p>Käyttäjänimi: {username}</p>
          <h2>Visualisointi näkymät: </h2>
          <div>
            <select value={selectedView} onChange={handleViewChange}>
            <option value="">Select a custom view</option>
            {customViews.map((view) => (
            <option key={view.id} value={view.url}>
            {view.title}
            </option>
            ))}
            </select>
            <button onClick={openSelectedView}>Open</button>
            <button onClick={() => deleteCustomView(selectedView)}>
            Delete
            </button>
          </div>
        </div>
        <button onClick={handleLogout} style={{ fontWeight: "bold" }}>Kirjaudu ulos</button>        
        <button onClick={handleUserDelete} style={{ fontWeight: "bold", backgroundColor: "darkred" }}>Poista käyttäjä</button>

      </div>
  );
}
