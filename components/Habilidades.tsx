import { motion } from 'framer-motion'
import React, { useState } from 'react'
import HabilidadCard from './HabilidadCard';


export const Habilidades = () => {
  
  //Creamos Nuestras Habilidades
  const [tecnologia, setTecnologia] = useState("tecnologia1");

  const skills = ['https://i.postimg.cc/ZKDtfzNz/java-logo.png', 'https://i.postimg.cc/hGN6NvkR/eclipse-logo.png', 'https://i.postimg.cc/MT6w9vVZ/react-logo.png', 'https://i.postimg.cc/t43889Xs/javascript-logo.jpg', 'https://i.postimg.cc/s2cdGs8k/netxjs-logo.png', 'https://i.postimg.cc/bvdWrkxt/typescript-logo.png', 'https://i.postimg.cc/BZ5YqMrz/tailwind-csslogo.jpg', 'https://i.postimg.cc/y87XLKW6/android-studio-logo.png', 'https://i.postimg.cc/T37LnLSx/database-mysql-logo.png', 'https://i.postimg.cc/j5J7xxMb/firebase-logo-shot.png', 'https://i.postimg.cc/dVsvw55Q/lua-logo.png', 'https://i.postimg.cc/ydqNTFyM/Net-Beans-Logo-wine.png'];

  return(
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className=" text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center bg-black/20">
        <h3 className="titulos text-center top-24 text-[#7FFFD4]">
            Habilidades
        </h3>

        <h3 className="subtitulos text-center top-36 pt-4 text-[#7FFFD4]">
            Lenguajes - Frameworks - IDE
        </h3>
        
        <div className="lg:grid-cols-5 grid grid-cols-3 gap-2 lg:pt-[8%] pt-[25%] space-x-1 justify-between h-auto w-[45%] mx-auto">
          {skills?.slice(0 , skills.length).map((skills) => (
            // eslint-disable-next-line react/jsx-key
            <HabilidadCard key={""} technologia={skills} />
            
          ))}

          {skills?.slice(skills.length, skills.length).map((skills) => (
            // eslint-disable-next-line react/jsx-key
            <HabilidadCard key={""} technologia={skills} />
          ))}
        

        </div>
    </motion.div>
  );
}

export default Habilidades