import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
     initial={{
      opacity: 0,
  }}
  animate={{
    scale: [1,2,2,3,1],
    opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
    borderRadius: ["20%", "20%", "50%", "80%", "20%"],
  }}
  transition={{
    duration: 2,
  }}
  
  className="relative flex justify-center items-center">
    <motion.div className="absolute border border-[#7FFFD4] rounded-full h-[200px] w-[200px]
     mt-52 animate-ping">     </motion.div>
    <motion.div
    animate={{
      rotate: 360,
      
     }}
     transition={{
       duration: 4,
       delay: 0.5,
       repeat: Infinity,
       repeatType: "reverse",
   }}
     className=" border border-[#7FFFD4]/70 h-[300px] w-[300px] absolute
     mt-52"> 
    </motion.div>
    <div className="rounded-full border border-[#7FFFD4]/20 h-[500px] w-[500px] absolute
     mt-52 animate-pulse">     </div>
    <div className="rounded-full border border-[#7FFFD4]  h-[650px] w-[650px] absolute
     mt-52 animate-pulse">     </div>

  </motion.div>
    
  );
}

export default BackgroundCircles;