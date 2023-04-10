import {
  BsGoogle,
  BsGithub,
  BsTwitter,
  BsReddit,
  BsYoutube,
} from "react-icons/bs";
import { IconType } from "react-icons";

export const visitCategories = [
  { key: "all", name: "All" },
  { key: "socials", name: "Socials" },
  { key: "devTools", name: "Dev Tools" },
  { key: "organic", name: "Organic" },
];

export interface IVisitsData {
  name: string;
  value: number;
  category: string;
  color: string;
  icon: IconType;
}

export const visitsData: IVisitsData[] = [
  {
    name: "Google",
    value: 456,
    category: "organic",
    color: "#64748b",
    icon: BsGoogle,
  },
  {
    name: "GitHub",
    value: 271,
    category: "devTools",
    color: "#0f172a",
    icon: BsGithub,
  },
  {
    name: "Twitter",
    value: 191,
    category: "socials",
    color: "#3b82f6",
    icon: BsTwitter,
  },
  {
    name: "Reddit",
    value: 185,
    category: "socials",
    color: "#f97316",
    icon: BsReddit,
  },
  {
    name: "Youtube",
    value: 91,
    category: "socials",
    color: "#ef4444",
    icon: BsYoutube,
  },
];
