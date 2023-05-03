import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [token, setToken] = useState(null);

  const login = (username, password) => {
    // make an API call to authenticate the user
    // if authentication succeeds, set the token in the state
    setToken("some_token_value");
  };

  const logout = () => {
    // remove the token from the state
    setToken(null);
  };

  const isAuthenticated = () => {
    // check if the token exists in the state
    return token !== null;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };