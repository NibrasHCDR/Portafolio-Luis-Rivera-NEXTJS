import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <a href={experience?.linkto}>
  <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
   md:w-[700px] xl:w-[1750px] snap-center bg-gradient-to-r from-[#7FFFD4]/30 to-sky-400/30 p-10 hover:opacity-100
  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden hover:animate-pulse">
    
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
    src={urlFor(experience?.companyImage).url()}
    alt=""
    />

    <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-center">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 text-center">{experience.company}</p>
        <div className="flex space-x-2 my-2">
            {experience.technologies.map(technology => (
              <img 
                key={technology._id}
                className="h-20 w-17 rounded-full object-center"
                src={urlFor(technology.image).url()}
                alt=""
              />
            ))}
        </div>
            <p className="uppercase py-5 text-gray-300 text-center">
                {new Date(experience.dateStarted).toDateString()}
                {experience.isCurrentlyWorkingHere
                }
                </p>
            <ul className="list-disc space-y-4 ml-5 text-lg max-h-100 overflow-y-scroll
            scrollbar-thin scrollbar-track-black scrollbar-thumb-[#7FFFD4]/80 md:w-[600px] xl:w-[1300px]">
              {experience.points.map((point, i) => (
              <li key={i}>{point}</li> 
              ))}
            </ul>
    </div>
    
  </article>
  </a>
  
  );
}