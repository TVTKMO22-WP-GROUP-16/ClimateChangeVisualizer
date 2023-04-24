import React from 'react';
import axios from 'axios';

const DeleteUserButton = ({ handleUserDelete }) => {
  const handleDelete = () => {

    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    axios
      .delete('http://localhost:8090/users/' + token)
      .then((response) => {
        console.log("Käyttäjä poistettu", response.data);
        handleUserDelete();
      })
      .catch((error) => {
        console.log('Käyttäjän poistaminen ei onnistunut:', error);
      });
  };  

  return (
    <button onClick={handleUserDelete}>Poista käyttäjä</button>
  );
};

export default DeleteUserButton;