// Build a Navigation Bar
// After successful login take user to productlist page automatically
// Create logout functionality
// Create Routes
// Create Shared Layout  : Private Routes and Restricted Routes  DONE

import React from "react";

import "./App.css";

import Login from "./components/Login/Login";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";

const App = () => {
  return (
    <div className="app-container">
      <Login />
    </div>
  );
};

export default App;
