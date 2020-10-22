import React, { Suspense, useContext } from "react";
import { IProject, IWriting } from "../../interfaces";
import { Projects } from "../DetailedProject/ProjectList";
import { Hero, AboutMe } from "./Components/";
import ListSection from "./Components/ListSection/ListSection";
import { Context } from "../../Components/Context";
import { RouteComponentProps } from "react-router-dom";

const Home: React.FC<RouteComponentProps> = () => {
  const { mediumData }: any = useContext(Context);

  const grabTags = (List: IProject[] | IWriting[]): string[] => {
    const Tags: string[] = [];

    // @ts-ignore
    List.map(
      (Item: IProject | IWriting) =>
        // @ts-ignore-start
        Tags.concat(Item.Tags || Item.categories)
      // @ts-ignore-end
    );

    Tags.filter((Tag: string) => !Tags.includes(Tag));

    return Tags;
  };

  const ProjectsSection = {
    Heading: "Projects",
    SectionText1: "view my",
    SectionText2: "projects",
    SelectMenuLabel: "Projects",
    SelectOptions: grabTags(mediumData),
    List: Projects,
  };

  const WritingsSection = {
    Heading: "Writings",
    SectionText1: "view my articles about",
    SelectMenuLabel: "Writings",
    SelectOptions: grabTags(Projects),
    List: mediumData,
  };

  const WritingSection = React.lazy(
    () => import("./Components/ListSection/ListSection")
  );

  return (
    <>
      <Hero />
      <AboutMe />
      <ListSection {...ProjectsSection} />
      <Suspense fallback="Loading...">
        <WritingSection {...WritingsSection} />
      </Suspense>
    </>
  );
};

export default Home;
