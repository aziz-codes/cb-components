"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const links1 = ["Home", "About", "Contact Us", "Help", "FAQS"];
  const links2 = ["Home 2", "About 2", "Contact Us 2", "Help 2", "FAQS 2"];
  const path = usePathname();

  // Check if the current path is "/dashboard"
  const isDashboard = path.startsWith("/dashboard");

  return (
    <div className="w-44 border-r h-screen flex flex-col gap-3">
      {isDashboard
        ? links2.map((link, index) => (
            <div className="py-3 rounded-md w-full px-2 " key={index}>
              {link}
            </div>
          ))
        : links1.map((link, index) => (
            <div className="py-3 rounded-md w-full px-2 " key={index}>
              {link}
            </div>
          ))}
    </div>
  );
};
export default Sidebar;
