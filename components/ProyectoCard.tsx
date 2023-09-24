import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

export const ProyectoCard = (props: { titulo: any, linkto: any, tecnologia: any, descripcion: any, cargo: any, fecha_inicio: any, fecha_fin: any, imagen: any }) => {
  const { titulo, linkto, tecnologia, descripcion, cargo, fecha_inicio, fecha_fin, imagen } = props;

  const technologias =
    []

  if (tecnologia == "tecnologias1") {
    technologias.push('https://i.postimg.cc/MT6w9vVZ/react-logo.png', 'https://i.postimg.cc/s2cdGs8k/netxjs-logo.png', 'https://i.postimg.cc/t43889Xs/javascript-logo.jpg', 'https://i.postimg.cc/bvdWrkxt/typescript-logo.png', 'https://i.postimg.cc/BZ5YqMrz/tailwind-csslogo.jpg');
  }

  else if (tecnologia == "tecnologias2") {
    technologias.push('https://i.postimg.cc/ZKDtfzNz/java-logo.png', 'https://i.postimg.cc/hGN6NvkR/eclipse-logo.png');
  }

  else if (tecnologia == "tecnologias3") {
    technologias.push('https://i.postimg.cc/y87XLKW6/android-studio-logo.png', 'https://i.postimg.cc/j5J7xxMb/firebase-logo-shot.png', 'https://i.postimg.cc/ZKDtfzNz/java-logo.png', 'https://i.postimg.cc/T37LnLSx/database-mysql-logo.png', 'https://i.postimg.cc/hGN6NvkR/eclipse-logo.png', 'https://i.postimg.cc/ydqNTFyM/Net-Beans-Logo-wine.png');
  }

  else if (tecnologia == "tecnologias4") {
    technologias.push('https://i.postimg.cc/dVsvw55Q/lua-logo.png');
  }

  else if (tecnologia == "tecnologias5") {
    technologias.push('https://i.postimg.cc/MT6w9vVZ/react-logo.png', 'https://i.postimg.cc/s2cdGs8k/netxjs-logo.png', 'https://i.postimg.cc/t43889Xs/javascript-logo.jpg',  'https://i.postimg.cc/BZ5YqMrz/tailwind-csslogo.jpg');
  }



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
          whileInView={{ opacity: 1, y: 0 }}
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
            {technologias.map(tecnologias => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={""}
                className="cardimagenCard"
                src={(tecnologias)}
                alt=""
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300 text-center">
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