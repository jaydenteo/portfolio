"use client";

import React, { useState } from "react";
import { Category, skills, SkillCategory } from "@/data/skillsData";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  const filteredSkills = (): SkillCategory[] => {
    return selectedCategory === "All"
      ? skills
      : skills.filter(
          (skillCategory) => skillCategory.category === selectedCategory
        );
  };

  return (
    <section className="h-[100vh] flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl mb-8">My Skills</h2>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 ${
            selectedCategory === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory(Category.ProgrammingLanguages)}
          className={`px-4 py-2 ${
            selectedCategory === Category.ProgrammingLanguages
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          Programming Languages
        </button>
        <button
          onClick={() => setSelectedCategory(Category.FrameworksLibraries)}
          className={`px-4 py-2 ${
            selectedCategory === Category.FrameworksLibraries
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          Frameworks & Libraries
        </button>
        <button
          onClick={() => setSelectedCategory(Category.DevOpsCloud)}
          className={`px-4 py-2 ${
            selectedCategory === Category.DevOpsCloud
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          DevOps & Cloud
        </button>
        <button
          onClick={() => setSelectedCategory(Category.Tools)}
          className={`px-4 py-2 ${
            selectedCategory === Category.Tools
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          Tools
        </button>
      </div>

      <div className="bg-white rounded w-full">
        {filteredSkills().map((skillCategory) => (
          <div key={skillCategory.category}>
            <div className="flex flex-wrap gap-2">
              {skillCategory.skills.map((skillItem) => (
                <div
                  key={skillItem.name}
                  className="bg-gray-100 p-4 rounded shadow-md text-center text-black"
                >
                  <p>{skillItem.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
