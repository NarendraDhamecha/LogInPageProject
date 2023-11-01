import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: null,
});

export const AuthContextProvider = (props) => {
  return <AuthContextProvider>{props.children}</AuthContextProvider>;
};

export default AuthContext;
