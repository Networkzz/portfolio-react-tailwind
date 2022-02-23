import React from "react";
import Cvphoto from "../../assets/cv-photo.webp";
import ButtonCV from "./ButtonCV";
//Defining content for About component
function About() {
  return (
    <div className="text-white">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start w-2/6 m-auto pb-10">
        <div className="m-auto w-4/6 ml-20">
          <h1 className="text-3xl font-fontName ">Alejandro Martín Pérez</h1>
          <h2 className="text-2xl">Front-end developer</h2>
        </div>
        <div className="m-auto">
          <img
            src={Cvphoto}
            alt="alejandro-martin"
            className="rounded-full w-24 object-cover border-2 mr-36"
          ></img>
        </div>
      </div>
      <div className="w-2/6 m-auto">
        <h2
          className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-4"
          id="about"
        >
          About me
        </h2>
        <p>
          Alejandro is a front-end developer from Spain who was a professional
          Overwatch esports player, an english teacher in China and now a
          full-time web developer that love building software and working in a
          team.
        </p>
      </div>
      <ButtonCV />
    </div>
  );
}

export default About;
