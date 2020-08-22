export interface Project {
  Id: number;
  Title: string;
  Links: ProjectLinks;
  UserDescription: string;
  CreatorDescription: string;
  Images: string[];
  Tags: string[];
}

export interface ProjectLinks {
  LiveLink: string;
  RepoLink: string;
}

export interface HeadingProp {
  Heading: string;
}

export interface SelectMenuProp {
  MenuOptions: any[];
  ValueUpdater: any;
}
