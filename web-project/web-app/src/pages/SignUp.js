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
    if (username.length !== 0 && password.length !== 0) {
      try {
        await register(username, password);
        alert("Rekisteröinti onnistui!");
        navigate("/login");
      } catch (error) {
        console.log(error);
        alert("Rekisteröinti epäonnistui.");
      }
    } else {
      alert("Rekisteröinti epäonnistui. Täytä kaikki kentät!");
    }
  };

    return (
      <div className="signup">
        <h1 className="otsikko">Rekisteröityminen</h1>
        <form onSubmit={handleSubmit}>
          <div className="divPuts">
            <label htmlFor="username">Käyttäjätunnus: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange} 
              placeholder ="Käyttäjätunnus"
            />
          </div>
          <div className="divPuts">
            <label htmlFor="password">Salasana: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder ="Salasana"
              style= {{marginBottom:"5vh"}}
            />
          </div>
          <button type="submit" className="button-19" >Rekisteröidy</button>
        </form>
      </div>
    );
  
};

export default SignUp;