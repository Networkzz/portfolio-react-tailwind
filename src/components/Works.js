import React from "react";
import CryptoQuizz from "../assets/cryptoquizz.webp";
import CryptoNet from "../assets/cryptonet.webp";
import { FaGithub } from "react-icons/fa";
function Works() {
  return (
    <div className="w-2/6 m-auto text-white">
      <h2
        className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-8"
        id="about"
      >
        Works
      </h2>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-col ml-6 text-center mr-6">
          <a
            href="http://cryptoquizz.000webhostapp.com/index.html"
            target="_blank"
            rel="noreferrer"
            className="w-52 h-42 block m-auto rounded-lg"
          >
            <img
              src={CryptoQuizz}
              alt="cryptoquizz"
              className="rounded-lg"
            ></img>
          </a>
          <h2 className="text-xl">CryptoQuizz</h2>
          <p>A quizz website about cryptocurrency in spanish.</p>
          <a
            className="flex-1 flex m-auto flex-row mt-2 bg-pink-400 hover:bg-pink-300 leading-4 pt-2 pr-2 pl-2 rounded-lg "
            href="https://github.com/Networkzz/CryptoNet"
            target="_blank"
            rel="noreferrer"
          >
            Source
            <FaGithub className="text-xl" />
          </a>
        </div>
        <div className="flex flex-col ml-6 text-center mr-6">
          <a
            href="https://networkzz.github.io/CryptoNet/"
            target="_blank"
            rel="noreferrer"
            className="w-52 h-42 block m-auto rounded-lg"
          >
            <img src={CryptoNet} alt="cryptonet" className="rounded-lg"></img>
          </a>
          <h2 className="text-xl">CryptoNet</h2>
          <p>A dashboard website to check cryptocurrency prices. </p>
          <a
            className="flex-1 flex m-auto flex-row mt-2 bg-pink-400 hover:bg-pink-300 leading-4 p-2 rounded-lg"
            href="https://github.com/Networkzz/CryptoNet"
            target="_blank"
            rel="noreferrer"
          >
            Source
            <FaGithub className="text-xl " />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-col ml-6 text-center mr-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Works;
