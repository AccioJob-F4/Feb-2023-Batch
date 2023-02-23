import React from "react";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import RestrictedRoutes from "./RestrictedRoutes";
import PrivateRoutes from "./PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {window.localStorage.getItem("token") ? (
          <>
            <Link to="/home">Home</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/products">Products</Link> <br />
            <Link to="/products/123">Product</Link> <br />
          </>
        ) : null}
      </nav>
      {/* Shared Layout */}
      {/* If user is trying to access the login page after he/she has logged in -->
      take the user back to home page. 
      
      If user is trying to access the home page
      or any other private route wihout logging in he/she shall be redirected to
      the login page */}

      {/* If user is logged in --> he/she can access only Private Routes */}
      {/* If user is not logged in --> he/she can access only Restricted Routes */}
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Product />} />
          </Route>
        </Route>

        <Route path="/" element={<RestrictedRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
