import { StaticImageData } from "next/image";

export enum ProjectCategory {
  Web = "Website",
  MobileApp = "Mobile Application",
  CHATBOT = "Chatbot",
}

export interface IProjectList {
  id: number;
  title: string;
  category: ProjectCategory;
  image: StaticImageData;
  imageList: StaticImageData[];
  videoLink?: string;
  techStack: string;
  client: string;
  description: string;
}
