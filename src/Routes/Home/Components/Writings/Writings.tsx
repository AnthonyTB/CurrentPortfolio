import React, { useState, useContext } from "react";
import "./Writings.css";
import Heading from "../Headings/Headings";
import { Context } from "../../../../Components/Context";
import { SelectMenu } from "../index";
import ScrollAnimation from "react-animate-on-scroll";
import { Loader } from "../../../../Components";

const Writings: React.FC<any> = () => {
  const [List, setList] = useState(null);
  const { mediumData } = useContext(Context);

  const HeadingProp = {
    Heading: "Writings",
  };

  const SelectMenuValue = (value: string) => {
    const selectedPosts: any = mediumData.items.filter((Post: any) =>
      Post.categories.includes(value)
    );
    setList(selectedPosts);
  };

  const renderSelectMenu = () => {
    const possibleCategory: any[] = [""];
    mediumData.items.map((Post: any) => {
      return Post.categories.filter((Category: string) => {
        if (!possibleCategory.includes(Category)) {
          possibleCategory.push(Category);
        }
      });
    });

    return (
      <SelectMenu
        Label={"Writing"}
        MenuOptions={possibleCategory}
        ValueUpdater={SelectMenuValue}
      />
    );
  };

  const renderPostList = (List: any) => {
    return (
      <div className="PostList">
        <ul>
          {List.map((Post: any, Idx: number) => {
            return (
              <li key={Idx} className="animate__animated animate__bounceInUp">
                <a href={Post.link} target="blank_">
                  <div
                    className="Post__image"
                    style={{
                      backgroundImage: `url(${Post.thumbnail})`,
                    }}
                  />
                  <h2 className="Post__heading">{Post.title}</h2>
                </a>
              </li>
            );
          })}
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
      <section className="Writings">
        <Heading {...HeadingProp} />
        <div className="container">
          <h3>
            view my articles about{" "}
            {mediumData ? renderSelectMenu() : <Loader color={"#fff"} />}
          </h3>
          {mediumData && List ? renderPostList(List) : ""}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Writings;
