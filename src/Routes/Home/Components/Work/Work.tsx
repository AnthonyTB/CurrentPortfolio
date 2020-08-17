import React from 'react';
import './Work.css';
import Heading from '../Headings/Headings';

const Work: React.FC<any> = () => {
  const HeadingProp = {
    Heading: 'Work',
  };

  return (
    <section className='Work'>
      <Heading {...HeadingProp} />
      <div className='container'>
        <h3>I wanna see your projects</h3>
      </div>
    </section>
  );
};

export default Work;
