import { Skill } from "./skillsData";

interface Project {
  title: string;
  skills: Skill[]; 
  image: string;
  link?: string;
  code?: string;
}

export const projects: Project[] = [
  {
    title: "Ampol Card Portal",
    skills: [Skill.React, Skill.AzurePipelines, Skill.Redux, Skill.JavaScript, Skill.CSS, Skill.SCSS],
    image: "/assets/project1.png",
    link: "https://live-site-one.com",
    code: "https://github.com/project-one"
  },
  {
    title: "Project Two",
    skills: [Skill.Python, Skill.Django, Skill.AWS],
    image: "/assets/project2.png",
    link: "https://live-site-two.com",
    code: "https://github.com/project-two"
  },
  {
    title: "Project Three",
    skills: [Skill.TypeScript, Skill.NextJS, Skill.Tailwind],
    image: "/assets/project3.png",
    link: "https://live-site-three.com",
    code: "https://github.com/project-three"
  }
];
