import Sidebar from "@/components/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const links = ["Home", "About", "Contact Us", "Help", "FAQS"];
  return (
    <div className="flex gap-2">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
