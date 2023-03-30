import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

export const ExperienciaCard = (props: { titulo: any, linkto: any, descripcion: any, cargo: any, fecha_inicio: any, fecha_fin: any, imagen: any }) => {
  const { titulo, linkto, descripcion, cargo, fecha_inicio, fecha_fin, imagen } = props; 


  return (
    <a href={linkto}>
  <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
   md:w-[700px] xl:w-[1750px] snap-center bg-gradient-to-r from-[#7FFFD4]/30 to-sky-400/30
 p-10 backdrop-blur-2xl hover:animate-pulse hover:opacity-100
  opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden">
    
    <motion.img
    initial={{
      y: -100,
      opacity: 0,
    }}
    transition={{ duration: 1.3 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
    className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
    object-center"
    src={imagen}
    alt=""
    />

    <div className="px-0 md:px-10 space-y-4">
        <h4 className="textotitulosCard text-center">{titulo}</h4>
        <p className="textosubtitulosCard mt-1 text-center">{cargo}</p>
        <div className="flex space-x-2 my-2">
        </div>
            <p className="uppercase py-5 text-gray-300 text-xl text-center">
                {fecha_inicio}
                </p>
            <ul className="list-disc textogeneralCard space-y-4 ml-5 max-h-100 overflow-y-scroll
            scrollbar-thin scrollbar-track-[#7FFFD4]/0 scrollbar-thumb-[#7FFFD4]/80 md:w-[600px] xl:w-[1300px]">
              {descripcion}
            </ul>
    </div>
    
  </article>
  </a>
  
  );
};