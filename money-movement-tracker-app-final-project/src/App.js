// Take Home Assignment

// 1. Write reducer for UPDATE_EXPENSE action.
// 2. Make Month and Year filters functional.
// 3. Add options in Navbar to move through the application
// 4. Handle wrong credentials login error message
// 5. Create Reset Filters button

import React from "react";
import { Routes, Route } from "react-router-dom";

import { PATHS } from "./paths";
import Login from "./components/Login/Login";
import AddExpense from "./components/AddExpense/AddExpense";
import ManageExpense from "./components/ManageExpense/ManageExpense";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";

export const centeredStyle = {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  background: "dodgerblue",
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path={PATHS.ADD_EXPENSE} element={<AddExpense />} />
        <Route path={PATHS.MANAGE_EXPENSE} element={<ManageExpense />} />
      </Route>

      <Route path="/" element={<RestrictedRoutes />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
