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
              <Link href="https://psp.scenebeta.com/noticia/auto-control" >
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
                
              <div className="space-y-0 px-0 md:px-10 max-w-6xl text-center">
              <Link href="https://psp.scenebeta.com/noticia/auto-control" className="cursor-pointer">
               <a className="text-4xl font-semibold">
                <span className="underline decoration-[#7FFFD4]/50">
                Proyecto {i + 1} de {projects.length}:
                    </span>{" "}
                     {project?.title}
               </a>
               </Link>

               <div className="flex items-center space-x-1 justify-center">
               {project?.technologies.map(technology => (
                <img 
                 className="h-20 w-15"
                 key={technology._id}
                 src={urlFor(technology.image).url()}
                 alt=""
                 />

               ))}
               </div>

               <p className="text-lg text-center md:text-left">
                {project?.summary}
               </p>
              </div>
             </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#7FFFD4]/10 left-0 h-[500px] 
        -skew-y-12" />
     </motion.div>
   );
 }
 
 export default Projects