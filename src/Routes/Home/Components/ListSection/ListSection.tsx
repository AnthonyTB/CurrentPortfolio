import React, { useState } from "react";
import "./ListSection.css";
import Heading from "../Headings/Headings";
import { IProject } from "../../../../interfaces";
import { SelectMenu } from "../";
import ScrollAnimation from "react-animate-on-scroll";
import { ListItem } from "./Components/";

interface IProps {
  Heading: string;
  SectionText1: string;
  SectionText2?: string;
  SelectOptions: string[];
  SelectMenuLabel: string;
  List: IProject[];
}

const ListSection: React.FC<IProps> = (props) => {
  const [List, setList] = useState<any[]>([]);

  const SelectMenuValue = (value: string) => {
    const selectedItems: IProject[] = props.List.filter((Item: IProject) =>
      Item.Tags.includes(value)
    );
    setList(selectedItems);
  };

  const renderList = () => {
    return (
      <div className="WorkList">
        <ul>
          {/* @ts-ignore-start */}
          {List.map((Item: IProject) => (
            <ListItem
              Title={Item.Title}
              ImgUrl={Item.Images[0]}
              Url={Item.Url}
            />
          ))}
          {/* @ts-ignore-end */}
        </ul>
      </div>
    );
  };

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOut="fadeOut"
      duration={1.5}
      delay={1}
    >
      <section className="WorkSection">
        <Heading Heading={props.Heading} />
        <div className="container">
          <h3>
            {props.SectionText1}{" "}
            <SelectMenu
              Label={props.SelectMenuLabel}
              MenuOptions={props.SelectOptions}
              ValueUpdater={SelectMenuValue}
            />{" "}
            {props?.SectionText2}
          </h3>
          {List ? renderList() : ""}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ListSection;
