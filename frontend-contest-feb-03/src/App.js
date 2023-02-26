import React from "react";
import { Routes, Route } from "react-router-dom";
import uniqid from "uniqid";

import { PATHS_MAP } from "./paths";

const App = () => {
  return (
    <Routes>
      {PATHS_MAP.map((pathObj) => (
        <Route key={uniqid()} path={pathObj.path} element={pathObj.component} />
      ))}

      {/* <Route path="/" element={<LandingPage />} />
      <Route path="/movies/:imdbID" element={<Detail />} /> */}
    </Routes>
  );
};

export default App;
