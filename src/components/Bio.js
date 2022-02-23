import React from "react";
//Defining content for Bio component
const bioText = [
  { 
    year: "1999",
    text: "Born in Cádiz, Spain." 
  },
  {
    year: "2017",
    text: "Professional Overwatch player ",
    href: "https://liquipedia.net/overwatch/Networkz",
    target: "_blank",
    rel: "noreferrer",
    title: "liquipedia.",
  },
  {
    year: "2019",
    text: "English teacher at GeniusWood education in Changsha, China.",
  },
  {
    year: "2021 to present",
    text: "Web developer." 
  },
];
const bioList = bioText.map((props) => (
  <ul key={props.text}>
    <li key={props.text}>
      <span key={props.year} className="font-bold pr-4">{props.year}</span>
      {props.text}
      <a
        key={props.href}
        className="text-pink-400 hover:text-pink-300"
        href={props.href}
        target={props.target}
        rel={props.rel}
      >
        {props.title}
      </a>
    </li>
  </ul>
));
function Bio() {
  return (
    <div className="w-2/6 m-auto text-white pb-4">
      <h2
        className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-4"
        id="bio"
      >
        Bio
      </h2>
      {bioList}
    </div>
  );
}

export default Bio;