import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';
import miPrimeraAnimacion from './AnimacionCubo';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `${pageInfo?.name}`,
      "Bienvenido a mi Portafolio",
      "XplenDev - Nibras", 
    ],
    loop: true,
    delaySpeed: 2000,
  });


  return( 
    
  <div className="h-screen flex flex-col space-y-8 items-center justify-center
  text-center overflow-hidden">
    <br></br>
    <BackgroundCircles />
    

    <motion.img
    className="relative rounded-full h-32 w-32 mx-auto object-cover"
    initial={{
      y: 0,
      opacity: 0,
    }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    src={urlFor(pageInfo?.heroImage).url()}
    alt=""
    />

    <div className="z-20">
      <h2 className="text-2xl uppercase text-[#7FFFD4] pb-2 tracking-[12.5px] animate-pulse">
        {pageInfo?.role}
      </h2>
      <h2 className="text-sm text-opacity-40 uppercase text-[#7FFFD4] pb-2 tracking-[12.5px]">
        {pageInfo?.email}
      </h2>
      <br></br>
    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
    <span className="mr-3">{text}</span>
    <Cursor cursorColor="#7FFFD4"></Cursor>
    </h1>
    

    <div className="pt-5">
      <Link href="#about">
      <button className="heroButton hover:animate-pulse border-[#7FFFD4] mb-4 mr-4">Acerca de mi</button>
      </Link>
      <Link href="#experience">
      <button className="heroButton hover:animate-pulse border-[#7FFFD4] mb-4 mr-4">Proyectos</button>
      </Link>
      <Link href="#skills">
      <button className="heroButton hover:animate-pulse border-[#7FFFD4] mb-4 mr-4">Habilidades</button>
      </Link>
      <Link href="#projects">
      <button className="heroButton hover:animate-pulse border-[#7FFFD4] mb-4 mr-4">Experiencia</button>
      </Link>
    </div>
    </div>
  </div>
  );
}