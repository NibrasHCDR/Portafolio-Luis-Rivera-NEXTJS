import React from 'react';
import { motion } from "framer-motion";
import { urlFor } from '../sanity';

type Props = {
  
}

export default function AcercaDeMi({ }: Props) {
  return (

    <div className="text-center bg-black/20">
      <h3 className="titulos">
    </h3> 

  <div className="flex flex-col relative h-screen text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
   
    <motion.img
    initial={{
      x: -200,
      opacity: 0
    }}
    transition={{
      duration: 1.2
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 1 }}
    whileInView={{opacity: 1, x: 0 }}
    viewport={{ once: true }}
    src={"https://i.postimg.cc/XYzchwqP/IMG-About.jpg"}
    className="-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
    md:rounded-lg md:w-64 sm:h-95 xl:w-[46%] xl:h-[75%]" 
    />
    <div className="space-y-10 px-0 md:px-10">
      <h4 className="subtitulos font-semibold text-center">
        Hola! Soy Luis Eduardo{" "} 
        <span className="underline decoration-[#7FFFD4]/50"></span>{" "}
        </h4>
        <p className="textogeneral text-start">{"Soy un Ingeniero desarrollador proactivo y apasionado por la programación y la tecnología, con experiencia en proyectos personales y académicos. Me destaco por mis excelentes habilidades de adaptabilidad y mis conocimientos en lenguajes de programación como Java, JavaScript, así como el uso de librerías actuales como ReactJS, NextJS 13 o TailwindCSS. Mi trabajo principal es el desarollo full-stack. Estoy siempre dispuesto a trabajar en equipo y a desarrollar mis habilidades en entornos profesionales."}</p>
    </div>
  </div>
  </div>
  );
}