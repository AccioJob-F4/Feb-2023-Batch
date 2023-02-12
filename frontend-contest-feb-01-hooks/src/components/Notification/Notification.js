import React, { useContext } from "react";
import { StoreContext } from "../../App";

import "./Notification.css";

const Notification = () => {
  const store = useContext(StoreContext);

  return (
    <div className={`${store.isError ? "error" : "success"}`}>
      {store.isError
        ? `Error : ${store.errorMessage}`
        : "Success : Your result is shown above !"}
    </div>
  );
};

export default Notification;
