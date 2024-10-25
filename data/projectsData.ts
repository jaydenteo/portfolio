import { AmpolBg, Ampolcard, OfficeBg, Portfolio, UniBg, Unipark } from "@/assets/images";
import { Skill } from "./skillsData";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  skills: Skill[]; 
  image: StaticImageData;
  backgroundImage: StaticImageData;
  link?: string;
  code?: string;
}

export const projects: Project[] = [
  {
    title: "Ampol Card Portal",
    skills: [Skill.React, Skill.AzurePipelines, Skill.Redux, Skill.JavaScript, Skill.TypeScript, Skill.CSS, Skill.SCSS, Skill.HTML, Skill.Jest, Skill.Tailwind, Skill.Storybook, Skill.Git, Skill.VSCode],
    image: Ampolcard,
    backgroundImage: AmpolBg,
    link: "https://www.ampol.com.au/business/products-and-services/fuel-cards",
  },
  {
    title: "UWA VIP Parking",
    skills: [Skill.TypeScript, Skill.React, Skill.SCSS, Skill.Django, Skill.Docker, Skill.Git, Skill.VSCode],
    image: Unipark,
    backgroundImage: UniBg,
    code: "https://github.com/zollf/CITS3200"
  },
  {
    title: "Portfolio",
    skills: [Skill.NextJS, Skill.Tailwind, Skill.TypeScript, Skill.HTML, Skill.Git, Skill.VSCode],
    image: Portfolio,
    backgroundImage: OfficeBg,
    link: "https://www.jaydenteo.com",
    code: "https://github.com/jaydenteo/portfolio"
  },
];
