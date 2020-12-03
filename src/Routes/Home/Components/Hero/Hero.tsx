import React from 'react';
import './Hero.css';
import HeroHeadshot from '../../../../Assets/HeroHeadshot.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero: React.FC<any> = () => {
  return (
    <header className='Hero'>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOut='fadeOut'
        duration={1.5}
        delay={1}
      >
        <img src={HeroHeadshot} alt='Anthony' />
      </ScrollAnimation>
    </header>
  );
};

export default Hero;
