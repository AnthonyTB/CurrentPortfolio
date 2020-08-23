import React, { useEffect } from 'react';
import './DetailedProject.css';
import './Carousel.css';
import { Projects } from './ProjectList';
import { Project } from '../../interfaces';
import Carousel from 'react-bootstrap/Carousel';
import { scrollToTop } from '../../Components/ScrollToTop';
import { ProjectLinks } from '../../interfaces';
import Return from '../../Assets/arrow.svg';
import { Link } from 'react-router-dom';

const DetailedProject: React.FC<any> = (props: any) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const project = Projects.filter(
    (Project: Project) =>
      Project.Title ===
      props.match.params.name.replace(/([a-z])([A-Z])/g, '$1 $2').trim()
  )[0];

  return (
    <section className='DetailedProject'>
      <Link to='/'>
        <img src={Return} className='return' alt='return button' />
      </Link>
      <Carousel>
        {project.Images.map((Image: string, Idx: number) => {
          return (
            <Carousel.Item>
              <img
                className='carousel animate__animated animate__fadeInRight'
                src={`${Image}`}
                alt={`${Idx} slide`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className='content'>
        <h1>{project.Title}</h1>
        <ul className='Tags'>
          {project.Tags.map((Tag: string, Idx: number) => (
            <li key={Idx}>{Tag}</li>
          ))}
        </ul>
        <div className='Link-Btns'>
          {project.Links.map((Link: ProjectLinks) => {
            return (
              <a href={Link.Link} target='blank_'>
                <i className={Link.Icon}>
                  <span>{Link.Title}</span>
                </i>
              </a>
            );
          })}
        </div>
        <div className='UseCase'>
          <h3>User Purpose</h3>
          <p>{project.UserDescription}</p>
        </div>
        <div className='Creation'>
          <h3>Creation Process</h3>
          <p>{project.CreatorDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailedProject;
