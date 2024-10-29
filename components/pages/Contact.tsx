import React from "react";
import Button from "../ui/Button";
import { socials } from "@/data/navData";

function Contact() {
  const emailLink =
    socials.find((social) => social.name === "Email")?.href || "#";

  return (
    <section className="mt-[-100svh]">
      <div className="h-[100svh]" />
      <div className="h-[100svh] sticky bottom-0 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <p className="text-heading-1 font-bold tracking-tight leading-[1.0]">
            let&apos;s build
          </p>
          <p className="text-heading-1 font-bold mr-2 tracking-tight leading-[1.0]">
            something great
          </p>
          <p className="text-heading-1 font-bold tracking-tight leading-[1.0]">
            together
          </p>
          <div className="mt-space-lg">
            <Button href={emailLink}>Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
