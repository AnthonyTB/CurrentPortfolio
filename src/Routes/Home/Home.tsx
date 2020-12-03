import React, { useContext } from "react";
import { IProject, IWriting } from "../../interfaces";
import { Projects } from "../DetailedProject/ProjectList";
import { Hero, AboutMe } from "./Components/";
import ListSection from "./Components/ListSection/ListSection";
import { Context } from "../../Components/Context";
import { RouteComponentProps } from "react-router-dom";

const Home: React.FC<RouteComponentProps> = () => {
  const { mediumData }: any = useContext(Context);

  const grabTags = (List: IProject[] | IWriting[]): string[] => {
    const Tags: string[] = [""];
    // @ts-ignore
    List.map((Project: IProject) => {
      return Project.Tags.filter((Tag: string) => {
        if (!Tags.includes(Tag)) {
          Tags.push(Tag);
        }
      });
    });

    return Tags;
  };

  const ProjectsSection = {
    Heading: "Projects",
    SectionText1: "view my",
    SectionText2: "projects",
    SelectMenuLabel: "Projects",
    SelectOptions: grabTags(Projects),
    List: Projects,
  };

  const WritingSection = () => {
    const WritingsSection = {
      Heading: "Writings",
      SectionText1: "view my articles about",
      SelectMenuLabel: "Writings",
      SelectOptions: mediumData ? grabTags(mediumData) : [""],
      List: mediumData,
    };

    return <ListSection {...WritingsSection} />;
  };

  return (
    <>
      <Hero />
      <AboutMe />
      <ListSection {...ProjectsSection} />
      <WritingSection />
    </>
  );
};

export default Home;
