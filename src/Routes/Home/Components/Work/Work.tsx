import React, { useState } from 'react';
import './Work.css';
import Heading from '../Headings/Headings';
import { Projects } from '../../../DetailedProject/ProjectList';
import { Project } from '../../../../interfaces';
import { SelectMenu } from '../';
import { WorkList } from './Components/index';
import ScrollAnimation from 'react-animate-on-scroll';

const Work: React.FC<any> = () => {
  const [List, setList] = useState(null);

  const HeadingProp = {
    Heading: 'Work',
  };

  const SelectMenuValue = (value: string) => {
    const selectedProjects: any = Projects.filter((Project: Project) =>
      Project.Tags.includes(value)
    );
    setList(selectedProjects);
  };

  const renderSelectMenu = () => {
    const possibleTags: any[] = [''];
    Projects.map((Project: Project) => {
      return Project.Tags.filter((Tag: string) => {
        if (!possibleTags.includes(Tag)) {
          possibleTags.push(Tag);
        }
      });
    });

    return (
      <SelectMenu MenuOptions={possibleTags} ValueUpdater={SelectMenuValue} />
    );
  };

  return (
    <ScrollAnimation
      animateIn='fadeIn'
      animateOut='fadeOut'
      duration={1.5}
      delay={1}
    >
      <section className='Work'>
        <Heading {...HeadingProp} />
        <div className='container'>
          <h3>view my {renderSelectMenu()} projects</h3>
          {List ? <WorkList List={List} /> : ''}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Work;
