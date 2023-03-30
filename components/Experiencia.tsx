import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'
import { ExperienciaCard } from './ExperienciaCard';
 
 type Props = {

 }
 
 function Experiencia({}: Props) {

    //Creamos Nuestras Experiencias
    const [titulo, setNombre] = useState("Proyecto Aulas Conectadas Universidad de la Frontera UFRO");
    const [imagen, setImage] = useState("https://i.postimg.cc/LXw48LLT/logo-ufro.jpg");
    const [cargo, setCargo] = useState("Técnico en terreno");
    const [fecha_inicio, setfFechaInicio] = useState("02-11-2022");
    const [fecha_fin, setFechaFin] = useState("");
    const [descripcion, setDescripcion] = useState("Participé y participo en el proyecto Aulas Conectadas de la Universidad de la Forntera (UFRO) En Compañía del ingeniero Informático Mario Felipe Busqués Araya, realizamos el trabajo en terreno en Colegios Municipales los cuales están dentro del proyecto Aulas Conectadas, para integrar internet de fibra óptica en diversas salas de los establecimientos. Se Realiza la medición del terreno completo por donde pasaran los tramos del internet a las aulas con la utilización de un Odómetro y Láser de medición. En el trabajo en terreno a través de una aplicación Android se identifican y registran Racks Disponibles, Racks Nuevos, Tramos por donde pasará la red, conectividad entre Puntos de Enlace y Racks y Puntos de enlaces de las aulas dentro de la IV Región de Chile.");
    const [linkto, setLinkTo] = useState("https://www.innovacion.mineduc.cl/iniciativas/aulas-conectadas-2022");

        //Creamos Nuestras Experiencias 2
        const [titulo2, setNombre2] = useState("Servicio Técnico Informático TeckwareRegiones");
        const [imagen2, setImage2] = useState("https://i.postimg.cc/2y5bv6FR/misproyectos-2.jpg");
        const [cargo2, setCargo2] = useState("Técnico/Ingeniero de servicio");
        const [fecha_inicio2, setfFechaInicio2] = useState("02-06-2021");
        const [fecha_fin2, setFechaFin2] = useState("");
        const [descripcion2, setDescripcion2] = useState("Trabajo y aplico actualmente mi conocimiento como Informático en servicio técnico y pyme Personal TeckWareRegiones (extensión de TeckWareLS), realizando labores de reparación y mantención completa a equipos computacionales consolas,, asesorías informáticas, armado de equipos, etc. en las ciudades de La Serena y Copiapó, Chile.        .");
        const [linkto2, setLinkTo2] = useState("https://www.instagram.com/teckware.regiones/");

                //Creamos Nuestras Experiencias 3
                const [titulo3, setNombre3] = useState("Evaluación Nacional Diagnóstica de la Formación Inicial Docente ENDFID");
                const [imagen3, setImage3] = useState("https://i.postimg.cc/mgJmVrYn/logo-ministeriodeeducacion.jpg");
                const [cargo3, setCargo3] = useState("Técnico Informático Encargado de Laboratorios");
                const [fecha_inicio3, setfFechaInicio3] = useState("01-10-2018");
                const [fecha_fin3, setFechaFin3] = useState("");
                const [descripcion3, setDescripcion3] = useState("Participé y participo activamente como Técnico Informático Encargado de equipos computacionales en los laboratorios de rendición de la Evaluación Nacional Diagnóstica de la Formación Inicial docente ENDFID (2018 y 2022). La cual se realiza en diferentes ciudades de Chile.");
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
      <ExperienciaCard titulo={titulo} linkto={linkto} descripcion={descripcion} cargo={cargo} fecha_inicio={fecha_inicio} fecha_fin={fecha_fin} imagen={imagen}/>
      <ExperienciaCard titulo={titulo2} linkto={linkto2} descripcion={descripcion2} cargo={cargo2} fecha_inicio={fecha_inicio2} fecha_fin={fecha_fin2} imagen={imagen2}/>
      <ExperienciaCard titulo={titulo3} linkto={linkto3} descripcion={descripcion3} cargo={cargo3} fecha_inicio={fecha_inicio3} fecha_fin={fecha_fin3} imagen={imagen3}/>

        </div>
    </motion.div>
    </div>
   );
 }
 
 export default Experiencia