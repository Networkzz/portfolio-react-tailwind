import React from 'react';
import Cvphoto from '../assets/cv-photo.jpeg'

function About() {
  return <div className='text-white'>
    <div className='grid grid-rows-2 grid-flow-col justify-center'>
    <h1 className='text-2xl mr-10'>Alejandro Martín Pérez</h1>
    <h2>Hola</h2>
    <img src={Cvphoto} alt='alejandro-martin' className='rounded-full w-24 object-cover border-2'></img>
    </div>
    
    <p>Alejandro is a front-end developer base in Spain who was a <a className='text-pink-400 hover:text-pink-300' href="https://liquipedia.net/overwatch/Networkz">professional Overwatch esports player</a>, an english teacher in China and
    now a full-time web developer that love building software and working with a team.</p>
  </div>;
}

export default About;
