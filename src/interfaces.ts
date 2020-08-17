export interface Project {
  Title: string;
  Links: ProjectLinks;
  UserDescription: string;
  CreatorDescription: string;
  Image: string;
  Tags: string[];
}

export interface ProjectLinks {
  LiveLink: string;
  RepoLink: string;
}

export interface HeadingProp {
  Heading: string;
}
