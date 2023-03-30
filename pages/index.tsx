import Head from 'next/head';
import Link from 'next/link';
import AcercaDeMi from "../components/AcercaDeMi";
import Contacto from '../components/Contacto';
import Header from '../components/Header';
import Portada from '../components/Portada';

import Footer from '../components/Footer';
import MisProyectos from '../components/MisProyectos';
import Habilidades from '../components/Habilidades';
import Experiencia from '../components/Experiencia';
import ButtomHeader from '@/components/ButtomHeader';

type Props = {

}


const Home = ({  }: Props) => {
  return (
    <div className="bg-[#142850] text-white h-screen hidde-scrollbar-smarth custom-img-fondo bg-fixed bg-cover
     overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FFFD4]/80">
      <Head>
        <title>Luis Eduardo Rivera Araya</title>
      </Head>

      { /* Header */}
      <section id="header">
      <Header/>
      </section>

      { /* ButtomHeader */}
      <section id="buttomheader">
      <ButtomHeader/>
      </section>

      { /* Hero */}
      <section id="portada" className="snap-start">
       <Portada/>
      </section>

      { /* About */}
      <section  id="acercademi" className="snap-center">
        <AcercaDeMi/>
      </section>

      { /* Experience */}
      <section  id="proyectos" className="snap-start">
        <MisProyectos/>
      </section>

      { /* Skills */}
      <section id="habilidades" className="snap-center">
        <Habilidades/>
      </section>

      { /* Proyects */}
      <section id="experiencia" className="snap-start">
        <Experiencia/>
      </section>

      { /* Contact Me */}
      <section id="contacto" className="snap-start">
        <Contacto />
      </section>

      <section id="footer" className="snap-start">
        <Footer></Footer>
      </section>


    </div>
  );
};

export default Home;
