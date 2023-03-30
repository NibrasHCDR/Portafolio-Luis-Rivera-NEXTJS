import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';
import AnimacionCubo from './AnimacionCubo';

type Props = {
    
};

export default function Header() {
  return (
  <header className="p-6 flex items-start justify-center mx-auto
    z-20 bg-black/20">
    <motion.div 
    
    animate={{
        x: 0,
        opacity: 1,
        scale: 1.2,

    }}
    transition={{
        duration: 1.7,

    }}
    initial={{
        x: -500,
        opacity: 0,
        scale: 2,
    }}

    className="flex flex-row items-center"
    >
        {/*Social Icons */}
        
            <SocialIcon
            className="hover:animate-pulse hover:scale-150"
            key=""
            url="https://www.instagram.com/?hl=en"
            fgColor="#7FFFD4"
            bgColor="transparent"
            />

            <SocialIcon
            className="hover:animate-pulse hover:scale-150"
            key=""
            url="https://www.facebook.com/TeckwareRegiones"
            fgColor="#7FFFD4"
            bgColor="transparent"
            />

           <SocialIcon
            className="hover:animate-pulse hover:scale-150"
            key=""
            url="https://www.linkedin.com/in/luis-rivera-araya-35202423b/"
            fgColor="#7FFFD4"
            bgColor="transparent"
            />

            <SocialIcon
            className="hover:animate-pulse hover:scale-150"
            key=""
            url="https://github.com/NibrasHCDR"
            fgColor="#7FFFD4"
            bgColor="transparent"
            />
        

    </motion.div>
  </header>
  );
}