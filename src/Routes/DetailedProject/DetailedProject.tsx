import React, { useEffect } from "react";
import "./DetailedProject.css";
import "./Carousel.css";
import { Projects } from "./ProjectList";
import { IProject, IProjectLinks } from "../../interfaces";
import Carousel from "react-bootstrap/Carousel";
import { scrollToTop } from "../../Components/ScrollToTop";
import Return from "../../Assets/arrow.svg";
import { Link } from "react-router-dom";
import { Boundary } from "../";

const DetailedProject: React.FC<any> = (props: any) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const project = Projects.filter(
    (Project: IProject) =>
      Project.Title.toLowerCase() ===
      props.match.params.name.replace(/-/g, " ").toLowerCase()
  )[0];

  if (!project) {
    return <Boundary />;
  }

  return (
    <section className="DetailedProject">
      <Link to="/">
        <img src={Return} className="return" alt="return button" />
      </Link>
      <Carousel>
        {project.Images.map((Image: string, Idx: number) => {
          return (
            <Carousel.Item>
              <img
                className="carousel animate__animated animate__fadeInRight"
                src={`${Image}`}
                alt={`${Idx} slide`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="content">
        <h1>{project.Title}</h1>
        <ul className="Tags">
          {project.Tags.map((Tag: string, Idx: number) => (
            <li key={Idx}>{Tag}</li>
          ))}
        </ul>
        <div className="Link-Btns">
          {project.Links.map((Link: IProjectLinks) => {
            return (
              <a href={Link.Link} target="blank_">
                <i className={Link.Icon}>
                  <span>{Link.Title}</span>
                </i>
              </a>
            );
          })}
        </div>
        <div className="UseCase">
          <h3>User Purpose</h3>
          <p>{project.UserDescription}</p>
        </div>
        <div className="Creation">
          <h3>Creation Process</h3>
          <p>{project.CreatorDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailedProject;
