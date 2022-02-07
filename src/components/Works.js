import React from "react";
import CryptoQuizz from "../assets/cryptoquizz.webp";
import CryptoNet from "../assets/cryptonet.webp";
import { FaGithub } from "react-icons/fa";
const workAnchorCryptoQuizz = [
  {
    href: "http://cryptoquizz.000webhostapp.com/index.html",
    target: "_blank",
    rel: "noreferrer",
    className: "w-52 h-42 block m-auto rounded-lg",
    src: CryptoQuizz,
    alt: "CryptoQuizz",
  },
];
const workAnchorCryptoNet = [
  {
    href: "https://networkzz.github.io/CryptoNet/",
    target: "_blank",
    rel: "noreferrer",
    className: "w-52 h-42 block m-auto rounded-lg",
    src: CryptoNet,
    alt: "CryptoNet",
  },
];
const sourceAnchor = [
  {
    className:
      "m-auto content-center inline-flex text-center p-1 bg-pink-500 hover:bg-pink-400 rounded-lg mt-2",
    href: "https://github.com/Networkzz/CryptoNet",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub className="text-xl mt-0.5 ml-1" />,
  },
];
const titleWork = ["CryptoQuizz", "CryptoNet"];
const paragraphWork = ["A quizz website about cryptocurrency in spanish.", "A dashboard website to check cryptocurrency prices."];
function Works() {
  return (
    <div className="w-2/6 m-auto text-white">
      <h2
        className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-8"
        id="works"
      >
        Works
      </h2>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-col ml-6 text-center mr-6">
          {workAnchorCryptoQuizz.map((props) => (
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
                className="rounded-lg"
              />
            </a>
          ))}
          <h2 className="text-xl">{titleWork[0]}</h2>
          <p>{paragraphWork[0]}</p>
          {sourceAnchor.map((props) => (
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
          ))}
        </div>
        <div className="flex flex-col ml-6 text-center mr-6">
        {workAnchorCryptoNet.map((props) => (
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
                className="rounded-lg"
              />
            </a>
          ))}
          <h2 className="text-xl">{titleWork[1]}</h2>
          <p>{paragraphWork[1]}</p>
          {sourceAnchor.map((props) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;