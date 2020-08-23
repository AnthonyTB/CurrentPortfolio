export interface Project {
  Id: number;
  Title: string;
  Links: ProjectLinks[];
  UserDescription: string;
  CreatorDescription: string;
  Images: string[];
  Tags: string[];
}

export interface HeadingProp {
  Heading: string;
}

export interface SelectMenuProp {
  MenuOptions: any[];
  ValueUpdater: any;
}

export interface ProjectLinks {
  Link: string;
  Title: string;
  Icon: string;
}
