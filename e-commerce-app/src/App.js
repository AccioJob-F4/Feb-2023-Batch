// Build a Navigation Bar
// After successful login take user to productlist page automatically
// Create logout functionality
// Create Routes
// Create Shared Layout  : Private Routes and Restricted Routes  DONE

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";
import { PATHS } from "./paths";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route exact path="/" element={<Navigate to={PATHS.PRODUCT_LIST} />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path={PATHS.PRODUCT_LIST} element={<ProductList />} />
          <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={PATHS.CART} element={<Cart />} />
        </Route>

        <Route path="/" element={<RestrictedRoutes />}>
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>

        <Route path="*" element={<Navigate to={PATHS.PRODUCT_LIST} />} />
      </Routes>
    </div>
  );
};

export default App;
