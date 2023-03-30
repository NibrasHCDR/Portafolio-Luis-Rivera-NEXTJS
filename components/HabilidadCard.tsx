import { motion } from 'framer-motion'
import React from 'react'

export const HabilidadCard = (props: { technologia: any }) => {
  const { technologia } = props;

  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
         initial={{
            x: false ? -600 : 0,
            opacity: 0
         }}
         whileHover={{ scale: 1.2 }}
         whileTap={{ scale: 1 }}
         transition={{ duration: 0.5 }}
         whileInView={{  opacity: 1, x: 0 }}
         src={technologia}
         className="rounded-full border-[#7FFFD4] border-2 object-cover cardimagenCardHabilidad filter group-hoven:grayscale transition duration-300
         ease-in-out space-x-4 space-y-4"
        />
        
    </div>
  );
}

export default HabilidadCard