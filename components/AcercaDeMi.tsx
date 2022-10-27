import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
}

export default function AcercaDeMi({ pageInfo }: Props) {
  return (
  <div className="flex flex-col relative h-screen text-center md:text-left
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
   <h3 className="absolute top-24 uppercase tracking-[20px] text-[#7FFFD4] text-2xl">
    Acerca de Mi
    </h3> 

    <motion.img
    initial={{
      x: -200,
      opacity: 0
    }}
    transition={{
      duration: 1.2
    }}
    whileInView={{opacity: 1, x: 0 }}
    viewport={{ once: true }}
    src={urlFor(pageInfo?.profilePic).url()}
    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
    md:rounded-lg md:w-64 ms:h-95 xl:w-[500px] xl:h-[600px]" 
    />
    <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold text-center">
        Extracto Profesional{" "} 
        <span className="underline decoration-[#7FFFD4]/50"></span>{" "}
        </h4>
        <p className="text-base text-center">{pageInfo?.backgroundInformation}</p>
    </div>
  </div>
  );
}