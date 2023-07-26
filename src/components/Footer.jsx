import React from "react";
import { socialMediaHandles } from "../constants";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="bg-transparent flex flex-wrap max-w-full xs:h-20 md:h-16 justify-center items-center">
          <h3 className="text-[18px]" style={{fontFamily: "Josefin Sans"}}>Made with 💜 by Omkar Kalepu</h3>
      <div className="flex justify-center flex-row w-9/12 lg:justify-end gap-3">
        {socialMediaHandles.map((app, index) => (
          <img
            src={app.icon}
            alt={app.name}
            key={`${app.name}-${index}`}
            className="w-6 h-6 cursor-pointer mb-3"
            onClick={() => window.open(app.link, "_blank")}
          />
        ))}
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
