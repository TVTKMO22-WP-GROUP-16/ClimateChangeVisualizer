import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard({ handleLogout }) {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

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
    }, []);

    const handleUserDelete = () => {
      if (window.confirm('Haluatko varmasti poistaa käyttäjän?')) {
      axios.delete('http://localhost:8090/users/' + username)
        .then((response) => {
          console.log("Käyttäjä poistettu", response.data);
          handleLogout();
          navigate("/login");
        })
        .catch((error) => {
          console.log('Käyttäjän poistaminen ei onnistunut:', error);
        });
      }
    };

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Kirjaudu ulos</button>
        <button onClick={handleUserDelete}>Poista käyttäjä</button>
        <div>
          <h2>Tiedot</h2>
          <p>Käyttäjänimi: {username}</p>
        </div>
      </div>
    );
}