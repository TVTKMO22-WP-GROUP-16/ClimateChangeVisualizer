import React from 'react';

export default function Dashboard({ handleLogout }) {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Kirjaudu ulos</button>
      </div>
    );
  }