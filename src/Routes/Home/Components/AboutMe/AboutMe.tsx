import React from 'react';
import './AboutMe.css';
import HeadingProp from '../Headings/Headings';
import Dots from '../../../../Assets/dot.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe: React.FC<any> = () => {
  const Heading = {
    Heading: 'About Me',
  };

  const SocialLinks = [
    { Icon: 'fab fa-twitter', Link: '' },
    { Icon: 'fab fa-github', Link: '' },
    { Icon: 'fab fa-linkedin', Link: '' },
    { Icon: 'far fa-envelope', Link: '' },
  ];

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      animateOut='fadeOut'
      duration={1.5}
      delay={1}
    >
      <section className='AboutMe'>
        <HeadingProp {...Heading} />
        <div className='container'>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <img src={Dots} alt='dots' />
          <ul>
            {SocialLinks.map((Icon) => (
              <li>
                <a href={Icon.Link} target='blank_'>
                  {<i className={`${Icon.Icon}`}></i>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutMe;
