import React from 'react';
import './WorkList.css';
import { Project } from '../../../../../../interfaces';
import { Link } from 'react-router-dom';

interface ListProp {
  List: Project[];
}

const WorkList: React.FC<any> = (props: ListProp) => {
  return (
    <div className='WorkList'>
      <ul>
        {props.List.map((Project: Project) => (
          <li
            key={Project.Id}
            className='Project animate__animated animate__bounceInUp'
          >
            <Link to={`/project/${Project.Title.replace(/ +/g, '')}`}>
              <div
                className='Project__image'
                style={{
                  backgroundImage: `url(${Project.Images[0]})`,
                }}
              />
              <h2 className='Project__heading'>{Project.Title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkList;
