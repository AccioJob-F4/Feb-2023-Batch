import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-text">{props.headerText}</div>
      <div className="sub-header-text">{props.subHeaderText}</div>
    </div>
  );
};

export default Header;
