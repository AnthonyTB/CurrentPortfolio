import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

interface IProps {
  Title: string;
  Url: string;
  ImgUrl: string;
}

const ListItem: React.FC<IProps> = (props) => {
  const isExternalLink = props.Url.startsWith("https://");
  return (
    <>
      <li
        key={props.Title}
        className="Work animate__animated animate__bounceInUp"
      >
        {isExternalLink ? (
          <a href={props.Url} target="blank_">
            <div
              className="Work__image"
              style={{
                backgroundImage: `url(${props.ImgUrl})`,
              }}
            />
            <h2 className="Work__heading">{props.Title}</h2>
          </a>
        ) : (
          <Link to={props.Url}>
            <div
              className="Work__image"
              style={{
                backgroundImage: `url(${props.ImgUrl})`,
              }}
            />
            <h2 className="Work__heading">{props.Title}</h2>
          </Link>
        )}
      </li>
    </>
  );
};

export default ListItem;
