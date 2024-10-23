"use client";

import { projects } from "@/data/projectsData";
import clsx from "clsx";
import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <section className="h-[300svh]">
      {projects.map((project, index) => (
        <div
          key={index}
          className={clsx(
            "h-screen z-20 w-full clip-path section-padding grid grid-cols-12 gap-6 items-center relative", // Added relative here
            index === 0
              ? "bg-amber-400"
              : index === 1
              ? "bg-lime-400"
              : "bg-sky-400"
          )}
        >
          {/* Left - Title */}
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-1/4 flex text-heading-sm tracking-heading z-30">
            {project.title}
          </div>

          {/* Middle - Small Image */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 group flex aspect-square w-1/4 items-center justify-center overflow-clip rounded-xl">
            <div className="relative z-50 h-full w-full mix-blend-difference">
              <Image
                src={`/assets/${project.image}`}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="absolute h-full w-full"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="${
                  index === 0 ? "#f0f0f0" : index === 1 ? "#d0e0f0" : "#c0f0d0"
                }"/></svg>`}
              />
              <a
                href={project.link}
                className="link-text flex h-full w-full items-center justify-center text-[#fff] transition-all duration-700 ease-expo"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Right - Skills, Links */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-1/4 flex flex-col z-30">
            <h3 className="text-xl font-bold mb-2">Skills:</h3>
            <ul className="list-disc list-inside">
              {project.skills.map((skill, idx) => (
                <li key={idx} className="text-sm">
                  {skill}
                </li>
              ))}
            </ul>
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
      ))}
    </section>
  );
}

export default Projects;
