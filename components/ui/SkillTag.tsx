import { SkillItem } from "@/data/skillsData";
import clsx from "clsx";
import React from "react";

export enum TagVariant {
  Primary = "primary",
  Secondary = "secondary",
}
interface SkillTagProps {
  skillItem: SkillItem;
  variant: TagVariant;
}

const SkillTag = ({ skillItem, variant }: SkillTagProps) => {
  return (
    <div
      className={clsx(
        "flex items-center bg-neutral-500 p-space-2xs rounded-xl text-center text-white font-semibold",
        variant === TagVariant.Primary
          ? "p-space-2xs"
          : "px-space-xs py-space-3xs rounded-xs",
      )}
    >
      {variant === TagVariant.Primary && (
        <skillItem.icon className="w-8 h-8 mr-2" />
      )}
      <p>{skillItem.name}</p>
    </div>
  );
};

export default SkillTag;
