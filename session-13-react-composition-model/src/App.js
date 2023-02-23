// React Composition Model

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

import Card from "./Card";
import Button from "./Button";
import EmailPwForm from "./EmailPwForm";

const App = () => {
  return (
    <div>
      <Card title="Card Title 01">
        <EmailPwForm btnLabel="Login" />
        <hr />
        <h2>Form 02</h2>
        <hr />
        <EmailPwForm btnLabel="SignUp" />
      </Card>

      <Card title="Card Title 02">
        <div>Name : Divyansh Singh</div>
        <div>Org : Razorpay</div>
        <div>Gender : Male</div>
        <Button
          hola={
            <>
              <DeleteIcon color="secondary" />
              Delete
            </>
          }
        />

        <Button
          hola={
            <>
              <CircularProgress />
              Login
            </>
          }
        />

        {/* </Button> */}
      </Card>
    </div>
  );
};

export default App;
