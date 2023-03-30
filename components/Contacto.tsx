import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion';

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

function ContactMe({}: Props) {

  return (

    <div className="bg-black/20">
      <div>
        <h3 className="titulos text-center">
            Contacto
        </h3>
        </div>

      

    <div className="flex">

    <div className="h-screen xl:w-[50%] w-screen
    justify-evenly rounded-r-lg
    z-0 hidden lg:inline-flex">

   <motion.div className="inline-block w-[85%] h-[90%] min-w-[45%] mx-auto my-auto rounded-lg bg-[#172554] space-y-10">
    
<div className="flex h-[25%] w-full mt-14">


    <div className="w-[45%] h-[100%] gif-repair mx-[5.3%] hidden md:inline-flex">
    

    </div>

    <motion.h1 className="text-center my-auto mx-[5%] textogeneral tracking-[1px] text-[#7FFFD4] cursor-pointer hover:scale-110">Servicio Técnico Computacional (Mantención - Update - Gaming)</motion.h1>
    </div>

<div className="flex h-[25%] w-full mt-14">

    <div className="w-[45%] h-[100%] gif-repair2 mx-[5.3%] hidden md:inline-flex">
    
    </div>
    <motion.h1 className="text-center justify-center my-auto mx-[5%] textogeneral tracking-[1px] text-[#7FFFD4] cursor-pointer hover:scale-110">Desarrollo de Proyectos Informáticos Web - Escritorio - Móviles</motion.h1>
    </div>

<div className="flex h-[25%] w-full mt-14">

    <div className="w-[25%] h-[100%] gif-repair3 mx-[7.5%] hidden md:inline-flex">
    
    </div>
    <motion.h1 className="text-center justify-center my-auto mx-[20%] textogeneral tracking-[1px] text-[#7FFFD4] cursor-pointer hover:scale-110">Soporte Remoto</motion.h1>
    </div>






   </motion.div>
        </div>

        <div className="flex h-screen xl:w-[50%] w-screen rounded-l-lg object-center">
          <motion.div className="w-[85%] h-[90%] min-w-[360px] mx-auto my-auto rounded-lg backdrop-blur-xl">

        <div className="space-y-10 my-[15%]">
            <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#7FFFD4]/60 h-8 w-8" />
                <p className="text-2xl text-[#7FFFD4]/80">+56940898950</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#7FFFD4]/60 h-8 w-8" />
                <p className="text-2xl text-[#7FFFD4]/80">l.riveraa664@hotmail.com</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#7FFFD4]/60 h-8 w-8" />
                <p className="text-2xl text-[#7FFFD4]/80">Chile</p>
            </div>
          </div>
          

         <form 
          action="https://formsubmit.co/l.riveraa664@hotmail.com" 
          method="POST"
          className="flex flex-col w-fit space-y-2 mx-auto"
          >
            <div className="flex space-x-2">
              <input placeholder="Nombre" className="contactInput" type="text" name="Nombre"/>
              <input placeholder="Email" className="contactInput" type="email" name="Email"/>

            </div>
            <input placeholder="Asunto" className="contactInput" type="text" name="Asunto"/>
            <input placeholder="Mensaje" className="contactInput" name="Mensaje"/>
            
            <br>
            </br>
            <motion.button
             className="bg-[#142850] rounded-md text-white font-bold
            text-lg hover:scale-110 mx-32 h-12" type="submit"
            initial={{
              y: 0,
              opacity: 0,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}>
                Enviar
            </motion.button>
         </form>
         </motion.div>


        </div>

        
        </div>

        </div>
  )
}

export default ContactMe