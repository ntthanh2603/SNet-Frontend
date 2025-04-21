import React from "react";
import "./App.css";
import Router from "./routes/Router";
import { AuthProvider } from "./states/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
