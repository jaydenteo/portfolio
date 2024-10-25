"use client";

import { projects } from "@/data/projectsData";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import SkillTag, { TagVariant } from "../ui/SkillTag";
import { skills } from "@/data/skillsData";

function Projects() {
  return (
    <section className="min-h-[300svh]">
      <h1 className="text-heading-1 mb-8 uppercase font-bold">Selected Work</h1>

      {projects.map((project, index) => (
        <div
          key={index}
          className={clsx(
            `px-space-lg h-screen z-20 w-screen inset-0 section-padding grid grid-cols-12 gap-6 items-center background-image sticky contain-paint top-0`,
          )}
          style={{
            backgroundImage: `url(${project.backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
          {/* Left - Title */}
          <div
            className="h-screen w-screen absolute left-0 right-0 z-20"
            style={{ height: "300svh", top: `${-100 * index}vh` }}
          >
            <div className="sticky top-0 h-screen flex justify-between">
              <div className="ml-space-lg w-1/4 flex items-center text-heading-2 tracking-heading z-30 font-bold">
                {project.title}
              </div>
              {/* Middle - Small Image */}
              <div className="relative z-30 flex justify-center items-center w-1/4 h-full">
                <div
                  className="relative w-full h-0"
                  style={{ paddingBottom: "55.56%" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl absolute top-0 left-0" // Add rounded corners if desired
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="${
                      index === 0
                        ? "#f0f0f0"
                        : index === 1
                          ? "#d0e0f0"
                          : "#c0f0d0"
                    }"/></svg>`}
                  />
                </div>
              </div>
              {/* Right - Skills, Links */}
              <div className="right-space-lg  w-1/4 flex flex-col z-30 justify-center">
                <div className="flex flex-wrap gap-space-3xs">
                  {project.skills.map((skillName, idx) => {
                    const skill = skills
                      .flatMap((category) => category.skills)
                      .find((s) => s.name === skillName);
                    return skill ? (
                      <SkillTag
                        key={idx}
                        skillItem={skill}
                        variant={TagVariant.Secondary}
                      />
                    ) : null; // Handle the case where the skill is not found
                  })}
                </div>
                <div className="mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-500 underline block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      className="text-blue-500 underline block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
