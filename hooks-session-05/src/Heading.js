import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Heading = (props) => {
  const themes = useContext(ThemeContext);

  console.log(themes, props);
  return <div>Heading</div>;
};

export default Heading;
