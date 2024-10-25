import React from "react";

function About() {
  return (
    <section
      className="px-space-lg h-[80svh] flex flex-col lg:flex-row"
      id="About"
    >
      <div className="w-full lg:w-1/2">
        <h2 className="text-heading-1 font-bold">
          Consultant <br /> Developer <br /> Engineer
        </h2>
      </div>

      <div className="h-full flex flex-col items-center justify-center lg:justify-end text-text-base--large text-gray-300 lg:w-1/2 lg:h-auto lg:mb-[15%] lg:mr-space-lg">
        <p className="mb-space-lg">
          I like finding simple solutions to complex problems. With experience
          in IT support, testing and software development, I deliver
          high-quality user experiences that make a meaningful impact.
        </p>
        <p>
          If I&apos;m not at my desk, you might find me bouldering, playing
          drums or hitting the squash courts.
        </p>
      </div>
    </section>
  );
}

export default About;
