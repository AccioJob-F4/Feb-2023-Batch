import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../paths";

const RestrictedRoutes = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <Navigate to={PATHS.MANAGE_EXPENSE} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RestrictedRoutes;
