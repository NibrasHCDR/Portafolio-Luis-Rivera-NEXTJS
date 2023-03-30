import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import AnimacionCubo from './AnimacionCubo';

type Props = {
    
};

export default function ButtomHeader() {
  return (
  <div className="flex items-center justify-center
    z-20 text-center bg-black/20">
    <motion.div 
    
    animate={{
        x: 0,
        opacity: 1,
        scale: 1,

    }}
    transition={{
        duration: 1.5,

    }}
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
    }}

    className="flex flex-row items-center hover:animate-pulse"
    />

     <div className="relative object-center items-center xl:pt-10">
      <Link href="#acercademi">
      <button className="heroButton hover:animate-pulse hover:scale-110 border-[#7FFFD4] mb-4 mr-4 items-center">Acerca de mi</button>
      </Link>
      <Link href="#proyectos">
      <button className="heroButton hover:animate-pulse hover:scale-110 border-[#7FFFD4] mb-4 mr-4">Proyectos</button>
      </Link>
      <Link href="#habilidades">
      <button className="heroButton hover:animate-pulse hover:scale-110 border-[#7FFFD4] mb-4 mr-4">Habilidades</button>
      </Link>
      <Link href="#experiencia">
      <button className="heroButton hover:animate-pulse hover:scale-110 border-[#7FFFD4] mb-4 mr-4">Experiencia</button>
      </Link>
    </div>

  </div>
  );
}