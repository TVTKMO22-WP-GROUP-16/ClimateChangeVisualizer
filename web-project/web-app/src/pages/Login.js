import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

//Sisäänkirjautuminen
const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Kirjautumislomakkeen käsittely
    const handleUsernameChange = (event) => { setUsername(event.target.value); };
    const handlePasswordChange = (event) => { setPassword(event.target.value); };

    //Kirjautumisen käsittely
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(username.length < 1 || password.length !== 0){
        try {
            const token = await login(username, password);
            localStorage.setItem('token', token);
            onLogin(token);
            alert("Kirjautuminen onnistui!");
            console.log(token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            alert("Kirjautuminen epäonnistui.");
        }
        } else{
            alert("Kirjautuminen epäonnistui. Täytä kaikki kentät!");
        }
    };

    //Sisäänkirjautumislomake
    return (
        <div className="login">
            <h1>Kirjaudu sisään</h1>
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
                    />
                </div>
                <button type="submit" class= "button-19">Kirjaudu sisään</button>
            </form>
        </div>
    );
};

export default Login;