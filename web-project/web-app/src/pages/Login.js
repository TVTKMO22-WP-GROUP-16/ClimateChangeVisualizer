import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem("token", token);
      onLogin(token);
      alert("Kirjautuminen onnistui!");
      console.log(token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Kirjautuminen epäonnistui.");
    }
  };

  return (
    <div className="login">
      <h1>Kirjaudu sisään</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Käyttäjätunnus</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Salasana</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" class="button-19">
          Kirjaudu sisään
        </button>
      </form>
    </div>
  );
};

export default Login;
