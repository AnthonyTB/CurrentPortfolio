import React from "react";
import "./Headings.css";
import { IHeadingProp } from "../../../../interfaces";

const Heading: React.FC<IHeadingProp> = (props) => {
  return (
    <div className="Heading">
      <h1>{props.Heading}</h1>
    </div>
  );
};

export default Heading;
