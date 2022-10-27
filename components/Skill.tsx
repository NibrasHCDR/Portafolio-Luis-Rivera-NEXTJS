import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

//https://mpng.subpng.com/20181122/krs/kisspng-java-programming-language-selenium-computer-softwa-july-2-16-halab-4-dev-5bf78387a7bb41.028192901542947719687.jpg

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
         initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 0.5 }}
         whileInView={{  opacity: 1, x: 0 }}
         src={urlFor(skill?.image).url()}
         className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
         xl:h-32 filter group-hoven:grayscale transition duration-300
         ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opacity-100">
                {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  );
}

export default Skill