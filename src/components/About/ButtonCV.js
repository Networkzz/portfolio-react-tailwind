import React from "react";
import { BsPersonSquare } from "react-icons/bs"
function ButtonCV() {
  return (
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mt-6">
      <a
        href="https://docdro.id/wobYzyv"
        target="_blank"
        rel="noreferrer"
        className="m-auto content-center inline-flex text-center p-4 bg-pink-500 hover:bg-pink-400 rounded-lg mt-2 leading-4"
      >
      <BsPersonSquare className="mr-2"/> My CV 
      </a>
    </div>
  );
}

export default ButtonCV;