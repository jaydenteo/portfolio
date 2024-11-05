"use client";

import { projects } from "@/data/projectsData";
import React from "react";
import Image from "next/image";
import SkillTag, { TagVariant } from "../ui/SkillTag";
import { skills } from "@/data/skillsData";
import Reveal from "../ui/Reveal";

function Projects() {
  return (
    <section className="min-h-[300vh]" id="Works">
      <Reveal direction="up" className="p-space-sm md:p-space-lg">
        <h1 className="text-heading-1 uppercase font-bold">
          Selected Work
          <sup className="">&nbsp;{projects.length}</sup>
        </h1>
        <div className="flex justify-start lg:justify-end mb-4 w-full pb-space-md">
          <div className="w-full lg:w-1/2 text-gray-300 text-text-base">
            A collection of some of my most notable projects.
          </div>
        </div>
      </Reveal>

      {projects.map((project, index) => (
        <div key={index} className={"px-space-sm md:px-space-lg"}>
          <div className="h-screen contain-paint bg-black border-t border-neutral-600">
            <div
              className={`h-[300vh] w-full absolute left-0 right-0`}
              style={{ top: `${-100 * index}vh` }} // tailwind does not support dynamic classes :(
            >
              <div className="sticky top-0 h-screen flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col justify-center h-1/3 lg:h-full lg:w-1/2">
                  {/* TITLE */}
                  <div className="flex items-center text-heading-2 tracking-heading font-bold">
                    {index + 1}. {project.title}
                  </div>
                  {/* SKILLS */}
                  <div className="right-space-sm md:right-space-lg flex flex-col justify-center">
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
                        ) : null;
                      })}
                    </div>
                    <div className="mt-space-md mr-space-md">
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-white underline block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site
                        </a>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          className="text-white underline block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* IMAGE */}
                <div className="relative flex justify-center items-center h-2/3 lg:w-1/2 lg:h-full px-space-md py-space-md lg:py-space-3xl">
                  <a
                    href={project.link || project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      {/* First Image (Background) */}
                      <Image
                        src={project.backgroundImage}
                        alt="Background Image"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl absolute top-0 left-0 opacity-80"
                        placeholder="blur"
                        loading="lazy"
                      />

                      {/* Second Image (Overlay) */}
                      <div className="absolute inset-0 flex justify-center items-center">
                        <div className="relative w-[80vw] h-full max-w-lg max-h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "contain" }}
                            className="z-10"
                            placeholder="blur"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" custom-gradient pointer-events-none absolute left-0 top-0 z-30 h-screen w-full animate-pan-overlay opacity-5"></div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
