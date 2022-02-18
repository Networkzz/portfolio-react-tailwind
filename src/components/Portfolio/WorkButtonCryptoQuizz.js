import React from 'react';
import { FaGithub } from "react-icons/fa";
const sourceAnchorCryptoQuizz = [
  {
    className:
      "m-auto content-center inline-flex text-center p-2 bg-pink-500 hover:bg-pink-400 rounded-lg mt-2",
    href: "https://github.com/Networkzz/CryptoQuizz",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub className="text-xl mt-0.5 ml-1" />,
  },
];
const firstElementWorkSource = sourceAnchorCryptoQuizz.map((props) => (
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
function WorkButton() {
  return <>
  {firstElementWorkSource}
  </>;
}

export default WorkButton;
