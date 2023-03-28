/*import React, { useState } from "react";


function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = (e) => {
    try {
      const response = await axios.post('/register', { username, password });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={(event) => {event.preventDefault(); handleSignUp();}}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;*/