import React from 'react';
import { Hero, AboutMe, Work, Writings } from './Components/';

const Home: React.FC<any> = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Work />
      <Writings />
    </>
  );
};

export default Home;
