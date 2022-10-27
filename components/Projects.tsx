 import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';
 
 type Props = {
  projects: Project[];
 }
 
 function Projects({ projects }: Props) {
   return (
     <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1}}
     transition={{ duration: 1.5 }}
     className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0"
     >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#7FFFD4] text-2xl"> 
          Experiencia
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7FFFD4]/80">
            {projects.map((project, i) => (
             <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
             items-center justify-center p-20 md:p-44 h-screen">
              <Link href="https://diagnosticafid.cl/" >
                <motion.img
                initial={{
                    y:-300,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                className="cursor-pointer w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
             />
             </Link>
                
              {/*Mostramos el TITULO/NOMBRE del trabajo*/}  
              <div className="space-y-0 px-0 md:px-10 max-w-6xl text-center">
               <a className="text-4xl font-semibold">
                <span className="underline decoration-[#7FFFD4]/50">
                    </span>
                     {project?.title}
               </a>

               <br></br>
               <br></br>

               {/*Mostramos Las FECHAS de inicio, finalización o presente del trabajo*/}
               <div className="flex items-center space-x-1 justify-center">
               <p className="text-2xl text-center md:text-left">
               {project?.cargo}
                </p>
               </div>
               
               {/*Mostramos Las FECHAS de inicio, finalización o presente del trabajo*/}
               <div className="flex items-center space-x-1 justify-center">
               <p className="uppercase py-5 text-[#7FFFD4]">
                {new Date(project.fechaInicio).toDateString()} {" "}
                {project.trabajaActualmente
                ? "- presente"
                : ""}
                </p>
               </div>

               {/*Mostramos el SUMMARY (descripción) del trabajo*/}
               <p className="text-2xl text-center md:text-left">
                {project?.summary}
               </p>
              </div>
             </div>
            ))}
        </div>
        
        {/* Creamos la barra de atrás de la pantalla de color y creamos su animación 
            "absolute" permite crear el div en la parte central de la pantalla*/}
        <motion.div
         className="w-11/12 absolute top-[30%] bg-[#7FFFD4]/40 h-[585px] animate-pulse
         rounded-md flex justify-evenly mx-auto flex-shrink-0 md:flex-row bg-gradient-to-r from-[#7FFFD4]/30 to-sky-400/30"
         initial={{
          x:-1200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: -8 }}
        viewport={{ once: true }} />
     </motion.div>
   );
 }
 
 export default Projects