import React from 'react';
import './Headings.css';
import { HeadingProp } from '../../../../interfaces';

const Heading: React.FC<any> = (props: HeadingProp) => {
  return (
    <div className='Heading'>
      <h1>{props.Heading}</h1>
    </div>
  );
};

export default Heading;
