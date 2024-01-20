import * as React from "react";
import { useState } from "react";

interface SelectProp {
  onChange?: (value: string) => void;
}

export default function Navigation({ onChange }: SelectProp) {
  const sections = ["Home", "Portfolio", "Achievements"];
  const [isSection, setSection] = useState(0);
  const isSectionText =
    "text-[#505050]/30 group-hover:text-[#505050]/50 transition-all";
  const isSectionLine =
    "border-[#FF7A00]/10 group-hover:border-[#FF7A00]/50 transition-all";

  function changeSection(indexSection: number) {
    setSection(indexSection);
    if (onChange) {
      onChange(sections[indexSection]);
    }
  }
  return (
    <section className="flex flex-row top-4 gap-5 md:gap-10 h-full justify-center md:justify-end items-start">
      {sections.map((section, idx) => (
        <button
          key={idx}
          onClick={() => changeSection(idx)}
          className="flex flex-col items-center group"
          disabled
        >
          <p
            className={`text-[#505050] text-lg sm:text-xl font-bold ${
              isSection !== idx && `${isSectionText}`
            }`}
          >
            {section}
          </p>
          <div
            className={`border-2 border-[#FF7A00] w-10 ${
              isSection !== idx && `${isSectionLine}`
            }`}
          />
        </button>
      ))}
    </section>
  );
}
