import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill';
import { Skill as SkillType } from "../typings";
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

type Props = {
  skills: SkillType[]
};

function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#7FFFD4] text-2xl">
            Habilidades
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Lenguajes - Frameworks - IDE
        </h3>
        <div className="grid grid-cols-4 gap-5">
          {skills?.slice(0 , skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        

        </div>
    </motion.div>
  );
}

export default Skills