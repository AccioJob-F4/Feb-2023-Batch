import React, { useContext } from "react";
import { StoreContext } from "../../App";

import "./Notification.css";

const Notification = ({ isError, errorMessage }) => {
  return (
    <div className={`${isError ? "error" : "success"}`}>
      {isError
        ? `Error : ${errorMessage}`
        : "Success : Your result is shown above !"}
    </div>
  );
};

export default Notification;
