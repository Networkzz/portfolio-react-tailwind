import React from "react";
import VallaxVideogame from "../../assets/VallaxVideogame.webp"
import { FaGithub } from "react-icons/fa";
const workAnchorVallax = [
  {
    href: "https://vallax-videogame.vercel.app/",
    target: "_blank",
    rel: "noreferrer",
    className: "w-64 h-32 block m-auto rounded-lg mb-4",
    src: VallaxVideogame,
    alt: "Vallax",
  },
];
const titleWork = ["Vallax"];
const paragraphWork = [
  "A landing website for a videogame. "
];
const thirdElementWork = workAnchorVallax.map((props) => (
  <a
    key={props.href}
    href={props.href}
    target={props.target}
    rel={props.rel}
    className={props.className}
  >
    <img
      key={props.src}
      src={props.src}
      alt={props.alt}
      className="rounded-lg mb-4"
    />
  </a>
))
const sourceAnchorVallax = [
  {
    className:
      "m-auto content-center inline-flex text-center p-2 bg-pink-500 hover:bg-pink-400 rounded-lg mt-2",
    href: "https://github.com/Networkzz/landing-videogame-Vallax",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub className="text-xl mt-0.5 ml-1" />,
  },
];
const thirdElementWorkSource = sourceAnchorVallax.map((props) => (
  <a
    key={props.href}
    className={props.className}
    href={props.href}
    target={props.target}
    rel={props.rel}
  >
    Source
    {props.icon}
  </a>
));

function Portofolio() {
  return (
    <div className="w-2/6 m-auto text-white mt-6">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-col text-center ml pl-4">
          {thirdElementWork}
          <h2 className="text-xl">{titleWork[0]}</h2>
          <p className="pb-2">{paragraphWork[0]}</p>
          {thirdElementWorkSource}
        </div>
      </div>
    </div>
  );
}

export default Portofolio;