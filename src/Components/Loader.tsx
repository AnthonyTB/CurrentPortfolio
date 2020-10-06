import React from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Animated } from "react-animated-css";

interface IProps {
  color: string;
}

const Loader: React.FC<IProps> = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDelay={0}
      animationOutDelay={800}
      isVisible={true}
    >
      <div className="Loader">
        <ScaleLoader css={override} color={props.color} loading={true} />
      </div>
    </Animated>
  );
};

export default Loader;
