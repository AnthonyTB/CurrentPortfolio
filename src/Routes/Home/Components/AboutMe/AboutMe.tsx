import React from "react";
import "./AboutMe.css";
import HeadingProp from "../Headings/Headings";
import Dots from "../../../../Assets/dot.svg";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe: React.FC<any> = () => {
  const Heading = {
    Heading: "About Me",
  };

  const SocialLinks = [
    { Icon: "fab fa-twitter", Link: "https://twitter.com/Anthony_Bostic" },
    { Icon: "fab fa-github", Link: "https://github.com/AnthonyTB" },
    { Icon: "fab fa-linkedin", Link: "https://www.linkedin.com/in/anthonytb/" },
    { Icon: "far fa-envelope", Link: "mailto:anthonytb97@gmail.com" },
  ];

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      animateOnce={true}
      duration={1.5}
      delay={1}
    >
      <section className="AboutMe">
        <HeadingProp {...Heading} />
        <div className="container">
          <p>
            I started learning web development in early 2018, after going to
            school and practicing in my free time. After building static
            websites for a year, I decided to take my interest to the next level
            and join a coding boot camp to learn more and learn how to work as a
            team with other developers. Now a little bit about me as a person
            outside of developing. I was born in Indiana but lived most of my
            life in Florida then moved to Washington in 2019. Therefore I am a
            big fan of the Colts & Seahawks. I also love playing video games
            mostly first-person shooters because I grew up on great games like
            Halo and Call of Duty. I also spend a lot of my time on Medium
            reading up on the latest framework updates.
          </p>
          <img src={Dots} alt="dots" />
          <ul>
            {SocialLinks.map((Icon, Idx: number) => (
              <li key={`Social Link ${Idx}`}>
                <a href={Icon.Link} target="blank_">
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
