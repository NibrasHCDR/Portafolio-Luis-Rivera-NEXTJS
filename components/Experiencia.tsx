import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { ExperienciaCard } from './ExperienciaCard';
 
 type Props = {

 }
 
 function Experiencia({}: Props) {


  //Creamos Nuestras Experiencias
    const [titulo4, setNombre4] = useState("Desarrollador WEB");
    const [imagen4, setImage4] = useState("https://i.postimg.cc/5t4ymgfb/Screenshot-7.png");
    const [cargo4, setCargo4] = useState("Ingeniero - Desarrollador");
    const [fecha_inicio4, setfFechaInicio4] = useState("2021 - Actualidad");
    const [fecha_fin4, setFechaFin4] = useState("");
    const [descripcion4, setDescripcion4] = useState("Actualmente me desempeño dentro del área del DESARROLLO WEB, principalmente en desarollos Front-End y Full-Stack. Dentro de los proyectos web en los que he participado y participo activamente se puede destacar el uso de lenguajes y tecnologías como: JavaScript - Java - TailwindCSS - CSS3 - HTML - ReactJS - NextJS 13 - MongoDB");
    const [linkto4, setLinkTo4] = useState("");

    //Creamos Nuestras Experiencias
    const [titulo, setNombre] = useState("Proyecto Aulas Conectadas UFRO");
    const [imagen, setImage] = useState("https://i.postimg.cc/LXw48LLT/logo-ufro.jpg");
    const [cargo, setCargo] = useState("Diseñador de RED de Datos");
    const [fecha_inicio, setfFechaInicio] = useState("2022 - Actualidad");
    const [fecha_fin, setFechaFin] = useState("");
    const [descripcion, setDescripcion] = useState("Proyecto Aulas Conectadas de la Universidad de la Forntera (UFRO). Encargado en terreno del modelado de diseños de red para conectividad de aulas en diversos establecimientos educacionales de la IV Chile.");
    const [linkto, setLinkTo] = useState("https://www.innovacion.mineduc.cl/iniciativas/aulas-conectadas-2022");

        //Creamos Nuestras Experiencias 2
        const [titulo2, setNombre2] = useState("Servicio Técnico Informático Teckware");
        const [imagen2, setImage2] = useState("https://i.postimg.cc/2y5bv6FR/misproyectos-2.jpg");
        const [cargo2, setCargo2] = useState("Técnico");
        const [fecha_inicio2, setfFechaInicio2] = useState("2019 - 2021");
        const [fecha_fin2, setFechaFin2] = useState("");
        const [descripcion2, setDescripcion2] = useState("Servicio Técnico Informático especializado en equipos computacionales, gaming y consolas en pyme TeckWare, de La Serena y Copiapó, Chile.");
        const [linkto2, setLinkTo2] = useState("https://www.instagram.com/teckware.regiones/");

                //Creamos Nuestras Experiencias 3
                const [titulo3, setNombre3] = useState("Evaluación Nacional Diagnóstica de la Formación Inicial Docente ENDFID");
                const [imagen3, setImage3] = useState("https://i.postimg.cc/mgJmVrYn/logo-ministeriodeeducacion.jpg");
                const [cargo3, setCargo3] = useState("Técnico Informático Encargado de Laboratorios");
                const [fecha_inicio3, setfFechaInicio3] = useState("2018 - actualidad");
                const [fecha_fin3, setFechaFin3] = useState("");
                const [descripcion3, setDescripcion3] = useState("Técnico Informático Encargado de equipos computacionales en los laboratorios de rendición de la Evaluación Nacional Diagnóstica de la Formación Inicial docente ENDFID, Chile.");
                const [linkto3, setLinkTo3] = useState("https://diagnosticafid.cl/");


   return (
    <div className="text-center bg-black/20">
      <h3 className="titulos ">
        Experiencia
        </h3>    
        
<motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <div className="cardCard flex space-x-5 overflow-x-scroll pb-[1%] snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FFFD4]">
      <ExperienciaCard titulo={titulo4} linkto={linkto4} descripcion={descripcion4} cargo={cargo4} fecha_inicio={fecha_inicio4} fecha_fin={fecha_fin4} imagen={imagen4}/>
      <ExperienciaCard titulo={titulo} linkto={linkto} descripcion={descripcion} cargo={cargo} fecha_inicio={fecha_inicio} fecha_fin={fecha_fin} imagen={imagen}/>
      <ExperienciaCard titulo={titulo2} linkto={linkto2} descripcion={descripcion2} cargo={cargo2} fecha_inicio={fecha_inicio2} fecha_fin={fecha_fin2} imagen={imagen2}/>
      <ExperienciaCard titulo={titulo3} linkto={linkto3} descripcion={descripcion3} cargo={cargo3} fecha_inicio={fecha_inicio3} fecha_fin={fecha_fin3} imagen={imagen3}/>

        </div>
    </motion.div>
    </div>
   );
 }
 
 export default Experiencia