import React from 'react';
import './Hero.css';
import HeroHeadshot from '../../../../Assets/HeroHeadshot.png';

const Hero: React.FC<any> = () => {
  return (
    <header className='Hero'>
      <img src={HeroHeadshot} alt='Anthony' />
    </header>
  );
};

export default Hero;
