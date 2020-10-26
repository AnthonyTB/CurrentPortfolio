import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

interface IProps {
  Title: string;
  Url: string;
  ImgUrl: string;
}

const ListItem: React.FC<IProps> = (props) => {
  console.log(props);
  return (
    <>
      <li
        key={props.Title}
        className="Work animate__animated animate__bounceInUp"
      >
        <Link to={props.Url}>
          <div
            className="Work__image"
            style={{
              backgroundImage: props.ImgUrl,
            }}
          />
          <h2 className="Work__heading">{props.Title}</h2>
        </Link>
      </li>
    </>
  );
};

export default ListItem;
