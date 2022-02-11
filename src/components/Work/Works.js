import React from "react";
import CryptoQuizz from "../../assets/cryptoquizz.webp";
import CryptoNet from "../../assets/cryptonet.webp"
import WorkButtonCryptoNet from "./WorkButtonCryptoNet";
import WorkButtonCryptoQuizz from "./WorkButtonCryptoQuizz"

const workAnchorCryptoQuizz = [
  {
    href: "http://cryptoquizz.000webhostapp.com/index.html",
    target: "_blank",
    rel: "noreferrer",
    className: "w-64 h-32 block m-auto rounded-lg mb-4",
    src: CryptoQuizz,
    alt: "CryptoQuizz",
  },
];
const workAnchorCryptoNet = [
  {
    href: "https://networkzz.github.io/CryptoNet/",
    target: "_blank",
    rel: "noreferrer",
    className: "w-64 h-32 block m-auto rounded-lg mb-4",
    src: CryptoNet,
    alt: "CryptoNet",
  },
];
const titleWork = ["CryptoQuizz", "CryptoNet"];
const paragraphWork = [
  "A quizz website about cryptocurrency in spanish.",
  "A dashboard website to check cryptocurrency prices.",
];
const firstElementWork = workAnchorCryptoQuizz.map((props) => (
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
));
const secondElementWork = workAnchorCryptoNet.map((props) => (
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
        {/*Left side first block Work*/}
        <div className="flex flex-col text-center mr-6">
          {firstElementWork}
          <h2 className="text-xl">{titleWork[0]}</h2>
          <p className="pb-2">{paragraphWork[0]}</p>
          <WorkButtonCryptoQuizz/>
        </div>
        {/*Right side first block Work*/}
        <div className="flex flex-col text-center">
          {secondElementWork}
          <h2 className="text-xl">{titleWork[1]}</h2>
          <p className="pb-2">{paragraphWork[1]}</p>
          <WorkButtonCryptoNet/>
        </div>
      </div>
    </div>
  );
}

export default Works;