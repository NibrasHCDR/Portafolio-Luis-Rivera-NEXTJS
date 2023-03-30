import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from '../sanity';
import BackgroundCircles from './BackgroundCircles';
import miPrimeraAnimacion from './AnimacionCubo';
import { useState, useEffect } from "react";

type Props = {
  
}

export default function Hero({ }: Props) {

  const [text, count] = useTypewriter({
    words: [
      "Luis Eduardo Rivera Araya",
      "TeckwareRegiones - XplenDev", 
      "Bienvenido a mi Portafolio"
    ],
    loop: true,
    delaySpeed: 5000,
  });

  
  return( 
    
  <div className="h-[700px] xl:h-screen flex flex-col space-y-12 items-center pt-48
  text-center overflow-hidden bg-black/20">
    <BackgroundCircles />
    <motion.img
    className="relative rounded-full h-32 w-32 mx-auto object-cover"
    initial={{
      y: 0,
      opacity: 0,
    }}
    whileHover={{ scale: 1.3 }}
    whileTap={{ scale: 1.3 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    src={"https://i.postimg.cc/k5RFdBtg/IMG-Profile-1.jpg"}
    alt=""
    />

    <div className="z-20">
      <h2 className="xl:text-3xl text-lg uppercase text-[#7FFFD4] pb-2 tracking-[9.5px] animate-pulse">
        Ingeniero en Informática
      </h2>
      <h2 className="portada_correo_texto text-opacity-75 uppercase text-[#7FFFD4] pb-2 tracking-[5.5px]">
        l.riveraa664@hotmail.com
      </h2>
      <br></br>
    <h1 className="xl:text-5xl text-3xl font-semibold px-10">
    <span className="mr-3">{text}</span>
    <Cursor cursorColor="#7FFFD4"></Cursor>
    </h1>
  
    </div>
  </div>
  );
}

