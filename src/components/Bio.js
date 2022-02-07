import React from 'react';

function Bio() {
  return <div className="w-2/6 m-auto text-white pb-4">
  <h2
    className="text-xl underline underline-offset-4 decoration-gray-400 font-fontName pb-4"
    id="bio"
  >
    Bio
  </h2>
  <ul>
    <li><span className='font-bold pr-4'>1999</span> Born in Cádiz, Spain.</li>
    <li><span className='font-bold pr-4'>2017</span> Professional Overwatch player <a className='text-pink-400 hover:text-pink-300' href="https://liquipedia.net/overwatch/Networkz">liquipedia</a>.</li>
    <li><span className='font-bold pr-4'>2019</span> English teacher at GeniusWood education in Changsha, China.</li>
    <li><span className='font-bold pr-4'>2021 to present</span> Web developer.</li>
  </ul>
</div>;
}

export default Bio;