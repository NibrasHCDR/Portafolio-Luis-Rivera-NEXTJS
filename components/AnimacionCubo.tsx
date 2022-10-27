import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function AnimacionCubo({}: Props) {
  return(
    <div className="relative flex justify-center items-center">

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
      id="animacion1"
      className="animate-pulse"
      >

      </motion.div>

      </div>
  )
}

export default AnimacionCubo;