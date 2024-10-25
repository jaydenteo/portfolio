import {
  Aws,
  Azure,
  Bitbucket,
  C,
  Css,
  Django,
  Docker,
  Framermotion,
  Git,
  Github,
  Html,
  Java,
  Javascript,
  Jest,
  Mongodb,
  Nextjs,
  Nodejs,
  Python,
  React,
  Redux,
  Scss,
  Springboot,
  Sql,
  Storybook,
  Tailwind,
  Typescript,
  Vscode,
} from "@/assets/icons";

export enum Category {
  ProgrammingLanguages = "Programming Languages",
  FrameworksLibraries = "Frameworks & Libraries",
  DevOpsCloud = "DevOps & Cloud",
  Tools = "Tools"
}

export enum Skill {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  Python = "Python",
  Java = "Java",
  SQL = "SQL",
  C = "C",
  React = "React",
  NextJS = "Next.js",
  NodeJS = "Node.js",
  SCSS = "SCSS",
  Tailwind = "Tailwind",
  Redux = "Redux",
  Jest = "Jest",
  Django = "Django",
  SpringBoot = "Springboot",
  Framer = "Framer Motion",
  AWS = "AWS",
  AzurePipelines = "Azure Pipelines",
  Docker = "Docker",
  Storybook = "Storybook",
  Git = "Git",
  GitHub = "GitHub",
  VSCode = "VSCode",
  MongoDB = "MongoDB",
  Bitbucket = "Bitbucket",
}

export interface SkillItem {
  name: Skill;
  icon: React.ElementType;
}

export interface SkillCategory {
  category: Category;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: Category.ProgrammingLanguages,
    skills: [
      { name: Skill.HTML, icon: Html },
      { name: Skill.CSS, icon: Css },
      { name: Skill.JavaScript, icon: Javascript },
      { name: Skill.TypeScript, icon: Typescript },
      { name: Skill.Python, icon: Python },
      { name: Skill.Java, icon: Java },
      { name: Skill.SQL, icon: Sql },
      { name: Skill.C, icon: C },
      { name: Skill.MongoDB, icon: Mongodb}
    ]
  },
  {
    category: Category.FrameworksLibraries,
    skills: [
      { name: Skill.React, icon: React },
      { name: Skill.NextJS, icon: Nextjs },
      { name: Skill.NodeJS, icon: Nodejs },
      { name: Skill.SCSS, icon: Scss },
      { name: Skill.Tailwind, icon: Tailwind },
      { name: Skill.Redux, icon: Redux },
      { name: Skill.Jest, icon: Jest },
      { name: Skill.Django, icon: Django },
      { name: Skill.SpringBoot, icon: Springboot },
      { name: Skill.Storybook, icon: Storybook },
      { name: Skill.Framer, icon: Framermotion }
    ]
  },
  {
    category: Category.DevOpsCloud,
    skills: [
      { name: Skill.AWS, icon: Aws },
      { name: Skill.AzurePipelines, icon: Azure },
      { name: Skill.Docker, icon: Docker },
      { name: Skill.GitHub, icon: Github },
      { name: Skill.Bitbucket, icon: Bitbucket},
    ]
  },
  {
    category: Category.Tools,
    skills: [
      { name: Skill.Git, icon: Git },
      { name: Skill.VSCode, icon: Vscode }
    ]
  }
];
