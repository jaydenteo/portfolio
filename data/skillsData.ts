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
  AWS = "AWS",
  AzurePipelines = "Azure Pipelines",
  Docker = "Docker",
  Storybook = "Storybook",
  Git = "Git",
  VSCode = "VSCode"
}

export interface SkillItem {
  name: Skill;
  icon: string;
}

export interface SkillCategory {
  category: Category;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: Category.ProgrammingLanguages,
    skills: [
      { name: Skill.HTML, icon: "" },
      { name: Skill.CSS, icon: "" },
      { name: Skill.JavaScript, icon: "" },
      { name: Skill.TypeScript, icon: "" },
      { name: Skill.Python, icon: "" },
      { name: Skill.Java, icon: "" },
      { name: Skill.SQL, icon: "" },
      { name: Skill.C, icon: "" }
    ]
  },
  {
    category: Category.FrameworksLibraries,
    skills: [
      { name: Skill.React, icon: "" },
      { name: Skill.NextJS, icon: "" },
      { name: Skill.NodeJS, icon: "" },
      { name: Skill.SCSS, icon: "" },
      { name: Skill.Tailwind, icon: "" },
      { name: Skill.Redux, icon: "" },
      { name: Skill.Jest, icon: "" },
      { name: Skill.Django, icon: "" },
      { name: Skill.SpringBoot, icon: "" },
      { name: Skill.Storybook, icon: "" }
    ]
  },
  {
    category: Category.DevOpsCloud,
    skills: [
      { name: Skill.AWS, icon: "" },
      { name: Skill.AzurePipelines, icon: "" },
      { name: Skill.Docker, icon: "" },
    ]
  },
  {
    category: Category.Tools,
    skills: [
      { name: Skill.Git, icon: "" },
      { name: Skill.VSCode, icon: "" }
    ]
  }
];
