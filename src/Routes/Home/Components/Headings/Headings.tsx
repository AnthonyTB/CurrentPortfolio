import React from "react";
import "./Headings.css";
import { IHeadingProp } from "../../../../interfaces";

const Heading: React.FC<any> = (props: IHeadingProp) => {
  return (
    <div className="Heading">
      <h1>{props.Heading}</h1>
    </div>
  );
};

export default Heading;
