import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => { setUsername(event.target.value); };
  const handlePasswordChange = (event) => { setPassword(event.target.value); };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(username, password);
      alert("Rekisteröinti onnistui!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Rekisteröinti epäonnistui.");
    }
  };

    return (
      <div className="signup">
        <h1>Rekisteröityminen</h1>
        <form onSubmit={handleSubmit}>
          <div className="divPuts">
            <label htmlFor="username">Käyttäjätunnus: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="divPuts">
            <label htmlFor="password">Salasana: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Rekisteröidy</button>
        </form>
      </div>
    );
  
};

export default SignUp;