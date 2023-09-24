import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { ProyectoCard } from './ProyectoCard';


export const MisProyectos = () => {

    //Creamos Nuestros Proyecto 1
    const [titulo5, setNombre5] = useState("Aplicación Web XplenDev");
    const [imagen5, setImage5] = useState("https://i.postimg.cc/T3HJ8Kh8/Screenshot-2.png");
    const [cargo5, setCargo5] = useState("Ingeniero - Desarrollador");
    const [fecha_inicio5, setfFechaInicio5] = useState("2023 - Actualmente");
    const [fecha_fin5, setFechaFin5] = useState("");
    const [descripcion5, setDescripcion5] = useState("Desarrollador de aplicación web XplenDev (dominio en proceso) para venta de membresías y plantillas web creadas a partir de productos realizados para clientes, utilizando tecnologías Web (JavaScript, NextJS 13, Tailwindcss, etc).");
    const [linkto5, setLinkTo5] = useState("");
    const [tecnologia5, setTecnologia5] = useState("tecnologias5");

  //Creamos Nuestros Proyecto 1
  const [titulo, setNombre] = useState("Aplicación Web Arata & Montaño ABOGADOS");
  const [imagen, setImage] = useState("https://i.postimg.cc/JnrGVnFD/misproyectos-1.png");
  const [cargo, setCargo] = useState("Ingeniero - Desarrollador");
  const [fecha_inicio, setfFechaInicio] = useState("2022");
  const [fecha_fin, setFechaFin] = useState("");
  const [descripcion, setDescripcion] = useState("Desarrollador de aplicación web para la página principal de Arataymontaño Abogados (www.aratamontañoabogados.cl). Uso de tecnologías como; Javascript, Typescript, ReactJS, NExtJS 13, TailwindCSS, Framer Motion,etc.");
  const [linkto, setLinkTo] = useState("https://www.aratamontañoabogados.cl/");
  const [tecnologia, setTecnologia] = useState("tecnologias1");

    //Creamos Nuestros Proyecto 2
    const [titulo2, setNombre2] = useState("Aplicación ESCRITORIO - TeckWare");
    const [imagen2, setImage2] = useState("https://i.postimg.cc/2y5bv6FR/misproyectos-2.jpg");
    const [cargo2, setCargo2] = useState("Ingeniero - Desarrollador");
    const [fecha_inicio2, setfFechaInicio2] = useState("2021");
    const [fecha_fin2, setFechaFin2] = useState("");
    const [descripcion2, setDescripcion2] = useState("Desarrollo de Aplicación de escritorio JAVA, esta aplicación dedicada permite mantener el control completo de logística y productos de la empresa de informática Teckwarels de La Serena, Chile");
    const [linkto2, setLinkTo2] = useState("https://www.instagram.com/teckware.regiones/");
    const [tecnologia2, setTecnologia2] = useState("tecnologias2");

        //Creamos Nuestros Proyecto 3
        const [titulo3, setNombre3] = useState("Aplicación Android & Windows CrystalCDH");
        const [imagen3, setImage3] = useState("https://i.postimg.cc/y8RJ029d/misproyectos-3.png");
        const [cargo3, setCargo3] = useState("Ingeniero - Desarrollador");
        const [fecha_inicio3, setfFechaInicio3] = useState("2020");
        const [fecha_fin3, setFechaFin3] = useState("");
        const [descripcion3, setDescripcion3] = useState("En el año 2020 en contextos de mis últimos años de carrera de Ingeniería en Informática, en el IP Santo Tomás, La Serena, Lideré un grupo de diseño y creación de dos aplicaciones (App Android y App de Escritorio Windows) que servirían de análisis para evaluar su uso dentro de la empresa CDH Ingeniería ltda. La aplicación Android fue fue programada bajo el IDE Android Studio, siendo Java el lenguaje utilizado para la codificación del proyecto, incluyendo Firebase, MySQL y MySQLite para la creación y uso de bases de datos locales y externos del sistema. Para la aplicación de Escritorio Windows, se utilizó el IDE Eclipse junto con ApacheNetbeansIDE y lenguaje de programación JAVA. ");
        const [linkto3, setLinkTo3] = useState("https://www.youtube.com/watch?v=Hc8WpP_LkgA");
        const [tecnologia3, setTecnologia3] = useState("tecnologias3");

                //Creamos Nuestros Proyecto 4
                const [titulo4, setNombre4] = useState("Videojuego para Consola PSP Play Station Portable");
                const [imagen4, setImage4] = useState("https://i.postimg.cc/0NqznZdC/misproyectos-4.png");
                const [cargo4, setCargo4] = useState("Desarrollador");
                const [fecha_inicio4, setfFechaInicio4] = useState("2010");
                const [fecha_fin4, setFechaFin4] = useState("");
                const [descripcion4, setDescripcion4] = useState("En la fecha Mié, 2010-10-20 11:57 a mis 16 años, realicé la publicación de mi primer videojuego llamado Auto control dentro de la página psp.scenebeta.com.  El juego fue programado en lenguaje de programación LUA con la utilización de Notepad++ para la edición del código y compilado en consola PSP2000 de Sony.  El videojuego permite al jugador seleccionar 3 autos separados por niveles (Fácil - Normal - Difícil), los cuales varían la velocidad del vehículo seleccionado dependiendo del seleccionado. Consta con 5 niveles cada vehículo y el objetivo es llegar al final de cada nivel sin colisionar con los vehículos que se irán generando en pantalla a medida que se avanza en la pista. Con la publicación de mi primer proyecto, gané el título de CODER en la página psp.scenebeta.com");
                const [linkto4, setLinkTo4] = useState("https://psp.scenebeta.com/noticia/auto-control");
                const [tecnologia4, setTecnologia4] = useState("tecnologias4");




  return (
    <div className="text-center bg-black/20">
    <h3 className="titulos">
      Mis Proyectos
      </h3>    
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <div className="cardCard flex space-x-5 overflow-x-scroll pb-[1%] snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FFFD4]">
          <ProyectoCard titulo={titulo5} linkto={linkto5} tecnologia={tecnologia5} descripcion={descripcion5} cargo={cargo5} fecha_inicio={fecha_inicio5} fecha_fin={fecha_fin5} imagen={imagen5}/>
            <ProyectoCard titulo={titulo} linkto={linkto} tecnologia={tecnologia} descripcion={descripcion} cargo={cargo} fecha_inicio={fecha_inicio} fecha_fin={fecha_fin} imagen={imagen}/>
            <ProyectoCard titulo={titulo2} linkto={linkto2} tecnologia={tecnologia2} descripcion={descripcion2} cargo={cargo2} fecha_inicio={fecha_inicio2} fecha_fin={fecha_fin2} imagen={imagen2}/>
            <ProyectoCard titulo={titulo3} linkto={linkto3} tecnologia={tecnologia3} descripcion={descripcion3} cargo={cargo3} fecha_inicio={fecha_inicio3} fecha_fin={fecha_fin3} imagen={imagen3}/>
            <ProyectoCard titulo={titulo4} linkto={linkto4} tecnologia={tecnologia4} descripcion={descripcion4} cargo={cargo4} fecha_inicio={fecha_inicio4} fecha_fin={fecha_fin4} imagen={imagen4}/>
            

        </div>
    </motion.div>
    </div>
  );
}

export default MisProyectos