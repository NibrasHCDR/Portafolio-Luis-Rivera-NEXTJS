import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {FaCcVisa} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'


type Props = {}

function Footer({}: Props) {
  return (
    <>
    <div className="w-screen h-1/2 bg-black/40 text-white p-20 flex md:flex-row flex-col justify-around items-start">
      <div className="p-5">
      <ul>
      <p className="text-white font-bold text-3xl">
      <span className="text-[#7FFFD4]">Luis Eduardo Rivera </span>
            </p>
            <p className="text-white font-bold text-3xl pb-6">Informático</p>
            <Link href="#header">
              <li className="text-white text-md pb-2 font-semibold hover:text-[#7FFFD4] cursor-pointer">Inicio</li>
            </Link>
            <Link href="#acercademi">
              <li className="text-white text-md pb-2 font-semibold hover:text-[#7FFFD4] cursor-pointer">Acerca de Mi</li>
            </Link>
            <Link href="#proyectos">
              <li className="text-white text-md pb-2 font-semibold hover:text-[#7FFFD4] cursor-pointer">Proyectos</li>
            </Link>
            <Link href="#habilidades">
              <li className="text-white text-md pb-2 font-semibold hover:text-[#7FFFD4] cursor-pointer">Habilidades</li>
            </Link>
            <Link href="#experiencia">
              <li className="text-white text-md pb-2 font-semibold hover:text-[#7FFFD4] cursor-pointer">Experiencia</li>
            </Link>
           </ul>

      </div>

        <div className="p-5"> 
        <ul>
            <p className="text-white font-bold text-3xl pb-6">
                 Búsca<span className="text-[#7FFFD4]">me</span>
            </p>
            <div className="flex gap-6 pb-5">
             <Link href="https://www.instagram.com/teckware.regiones/">
              <FaInstagram className="text-3xl cursor-pointer hover:text-[#7FFFD4]"></FaInstagram>
              </Link>
              <Link href="https://www.facebook.com/TeckwareRegiones">
              <FaFacebook className="text-3xl cursor-pointer hover:text-[#7FFFD4]"></FaFacebook>
              </Link>
              <Link href="#contacto">
              <FaEnvelope className="text-3xl cursor-pointer hover:text-[#7FFFD4]"></FaEnvelope>
              </Link>
            </div>
            <div className="inline-block gap-6 pb-5">
             
              <li className="text-white text-md pb-2 font-semibold">La Serena, Chile</li>
            </div>
          </ul>
        </div>
    </div>

    <div className="flex flex-col justify-center items-center p-5 bg-black/40">
     <a className="text-white font-semibold hover:text-[#7FFFD4] cursor-pointer lg:text-base text-sm " href="https://www.instagram.com/teckware.regiones/">© 2022-2023 | Luis Eduardo Rivera</a>
    </div>
    </>

  )
}

export default Footer