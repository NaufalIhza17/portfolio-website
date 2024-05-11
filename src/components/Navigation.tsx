"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const sections = [
    {
      name: "home",
      path: "/",
    },
    { name: "projects", path: "/projects" },
    { name: "achievements", path: "/achievements" },
    { name: "about", path: "/about" },
  ];
  const isSectionText =
    "text-[#505050]/30 group-hover:text-[#505050]/50 transition-all";
  const pathName = usePathname();

  return (
    <section className="flex flex-col items-center gap-[18px]">
      <p className="font-major-mono text-[32px]">
        IH<span className="text-orange-main">Z</span>
        <span className="text-purple-main">A</span>
      </p>
      <div className="flex flex-row top-4 gap-[14px]">
        <AnimatePresence>
          {sections.map((section, idx) => (
            <motion.button
              key={idx}
              className="flex flex-col items-end group relative"
              disabled
            >
              <Link href={section.path}>
                <motion.p
                  className={`text-[#505050] dark:text-white font-extralight ${
                    pathName !== section.path && `${isSectionText}`
                  }`}
                >
                  {section.name}
                </motion.p>
              </Link>
              {pathName === section.path ? (
                <motion.div
                  transition={{ type: "spring" }}
                  layoutId="underline"
                  className="absolute bottom-0 border border-orange-main w-4"
                ></motion.div>
              ) : null}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
