import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
//Defining content for social.
const social = [
  {
    name: "@networkzz",
    href: "https://github.com/Networkzz",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub className="mr-2"/>,
  },
  {
    name: "Alejandro Martín Pérez",
    href: "https://www.linkedin.com/in/alejandro-mart%C3%ADn-p%C3%A9rez-99ba511ba/",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaLinkedin className="mr-2" />,
  },
  {
    name: "@networkz_",
    href: "https://twitter.com/Networkz_",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaTwitter className="mr-2" />,
  }
];
const listSocial = social.map((item) => (
  <li key={item.name}>
    <a
      className="m-auto inline-flex text-center mt-2 hover:text-[#3fffef] font-bold text-lg text-[#41d3c7] leading-4"
      key={item.name}
      href={item.href}
      target={item.target}
      rel={item.rel}
    >
      {item.icon}
      {item.name}
    </a>
  </li>
));
function Socials() {
  return (
    <div className="w-2/6 m-auto text-white pb-4 pt-4">
      <h2
        className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-4"
        id="social"
      >
        Socials
      </h2>
      <ul>{listSocial}</ul>
    </div>
  );
}

export default Socials;
