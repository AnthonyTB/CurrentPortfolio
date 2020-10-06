export interface IProject {
  Id: number;
  Title: string;
  Links: IProjectLinks[];
  UserDescription: string;
  CreatorDescription: string;
  Images: string[];
  Tags: string[];
}

export interface IHeadingProp {
  Heading: string;
}

export interface ISelectMenuProp {
  MenuOptions: string[];
  Label: string;
  ValueUpdater: any;
}

export interface IProjectLinks {
  Link: string;
  Title: string;
  Icon: string;
}
