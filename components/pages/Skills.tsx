"use client";

import React, { useRef, useState } from "react";
import { Category, skills, SkillCategory } from "@/data/skillsData";
import { motion } from "framer-motion";
import SkillTag, { TagVariant } from "../ui/SkillTag";
import Reveal from "../ui/Reveal";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All",
  );

  const [resetCount, setResetCount] = useState(0); // State to trigger re-renders
  const constraintRef = useRef<HTMLDivElement>(null);

  const categories: (Category | "All")[] = ["All", ...Object.values(Category)];

  const getCategorySkillCount = (category: Category | "All") => {
    if (category === "All") return null; // No count for "All"
    return skills.find((skillCategory) => skillCategory.category === category)
      ?.skills.length;
  };

  const filteredSkills = (): SkillCategory[] => {
    return selectedCategory === "All"
      ? skills
      : skills.filter(
          (skillCategory) => skillCategory.category === selectedCategory,
        );
  };

  const handleReset = () => {
    setResetCount((prev) => prev + 1); // Increment to reset positions
  };

  return (
    <section
      className="px-space-sm md:px-space-lg min-h-[100svh] flex flex-col items-start justify-start"
      id="Stack"
    >
      <Reveal direction="up">
        <h1 className="text-heading-1 mb-8 uppercase font-bold">Tech Stack</h1>
        <div className="flex justify-start lg:justify-end mb-4 w-full pb-space-md">
          <div className="w-full lg:w-1/2 text-gray-300 text-text-base">
            Explore the tools and technologies that form the foundation of my
            work. Each category highlights the core skills I&apos;ve honed
            across various projects.
          </div>
        </div>
      </Reveal>

      <hr className="border-t border-neutral-600 w-full" />

      <div className="flex flex-wrap gap-4 py-space-sm md:py-space-lg">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-1 text-text-mono md:px-4 md:py-2 md:text-text-base--small ${
              selectedCategory === category
                ? "bg-purple-700 text-white"
                : "bg-neutral-500"
            } rounded font-bold`}
          >
            {category === "All" ? "All" : category}
            {category !== "All" && (
              <sup className="ml-1">{getCategorySkillCount(category)}</sup>
            )}
          </button>
        ))}
        <button
          onClick={handleReset}
          className="px-2 py-1 text-text-mono md:px-4 md:py-2 md:text-text-base--small bg-neutral-500 text-white rounded font-bold"
        >
          Reset Positions
        </button>
      </div>

      <div className="bg-neutral-800 rounded-2xl w-full min-h-[50svh] border-neutral-500 border-4 border-outline border-opacity-15 p-space-sm md:p-space-lg flex flex-col items-center">
        <div
          className="w-full flex-grow flex items-center justify-center"
          ref={constraintRef}
        >
          <div className="flex flex-wrap justify-center items-center gap-space-sm">
            {filteredSkills().map((skillCategory) => (
              <div
                key={skillCategory.category}
                className="flex flex-wrap justify-center gap-space-sm"
              >
                {skillCategory.skills.map((skillItem) => (
                  <motion.div
                    key={`${skillItem.name}-${resetCount}`}
                    drag
                    dragConstraints={constraintRef}
                    dragElastic={0.1}
                    dragMomentum={true}
                    whileDrag={{ scale: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <SkillTag
                      skillItem={skillItem}
                      variant={TagVariant.Primary}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
