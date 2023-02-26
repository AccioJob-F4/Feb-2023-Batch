import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { PATHS } from "../paths";
import Nav from "../components/Nav/Nav";

const PrivateRoutes = () => {
  return (
    <>
      <Nav />
      <div className="app-body">
        {window.localStorage.getItem("token") ? (
          <Outlet />
        ) : (
          <Navigate to={PATHS.LOGIN} />
        )}
      </div>
    </>
  );
};

export default PrivateRoutes;
