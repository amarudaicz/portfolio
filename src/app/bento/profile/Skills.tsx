"use client";

import Marquee from "@/app/magic-ui/Marquee";
import { useEffect, useRef, useState } from "react";

interface SkillsProps {
  title: string;
  icon?: string;
  index?: number;
}

const Skills = () => {
  const mockSkills = [
    { title: "Javascript", icon: "icon-[skill-icons--javascript]" },
    { title: "Typescript", icon: "icon-[skill-icons--typescript]" },
    { title: "Angular", icon: "icon-[devicon--angular]" },
    { title: "React", icon: "icon-[logos--react]" },
    { title: "Next JS", icon: "icon-[devicon--nextjs]" },
    { title: "React Native", icon: "icon-[logos--react]" },
    { title: "Tailwind", icon: "icon-[logos--tailwindcss-icon]" },
    { title: "NodeJS", icon: "icon-[logos--nodejs-icon]" },

    { title: "Express", icon: "icon-[skill-icons--expressjs-light]" },
    { title: "MySQL", icon: "icon-[devicon-plain--mysql]" },
    { title: "Sequelize", icon: "icon-[logos--sequelize]" },
    { title: "MongoDB", icon: "icon-[logos--mongodb-icon]" },
    { title: "", icon: "icon-[logos--aws]" },
    { title: "Firebase", icon: "icon-[logos--firebase]" },
    { title: "Figma", icon: "icon-[logos--figma]" },
    { title: "Git", icon: "icon-[devicon--git]" },
    { title: "", icon: "icon-[logos--pwa]" },
  ];

  const firstRow = mockSkills.slice(0, (mockSkills.length - 1) / 2)
  const secondRow = mockSkills.slice((mockSkills.length - 1) / 2, mockSkills.length)

  useEffect(() => {

  }, []);

  return (
    <div className="relative after:absolute after:w-11 after:h-full  after:bg-gradient-to-r after:from-neutral-900  after:to-transparent  after:top-0 before:absolute before:w-11 before:h-full before:z-[1] before:bg-gradient-to-l before:from-neutral-900 before:to-transparent before:right-0 ">
      <div
        className="w-full overflow-x-scroll no-scrollbar"
      >

        <Marquee pauseOnHover className=" ">
          {firstRow.map((e) => (
            <RenderChip key={e.title} title={e.title} icon={e.icon} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="  ">
          {secondRow.map((e) => (
            <RenderChip key={e.title} title={e.title} icon={e.icon} />
          ))}
        </Marquee>

      </div>
    </div>
  );
};

const RenderChip = ({ title, icon, index }: SkillsProps) => {
  return (
    <span className="cursor-pointer flex w-fit justify-center items-center px-4 py-2 gap-1 rounded-full border border-neutral-400 bg-neutral-900 bg-opacity-90">
      <i className={`${icon}`}></i>
      {title ? <span className="text-[10px] text-nowrap">{title}</span> : null}
    </span>
  );
};

export default Skills;
