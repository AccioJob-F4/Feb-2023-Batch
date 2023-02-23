import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoutes;
