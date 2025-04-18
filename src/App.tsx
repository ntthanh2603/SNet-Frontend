import React from "react";
import "./App.css";
import Router from "./routes/Router.tsx";
import { AuthProvider } from "./states/AuthContext.tsx";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
