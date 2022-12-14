import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AcercaDeMi from "../components/AcercaDeMi";
import Contacto from '../components/Contacto';
import Header from '../components/Header';
import Portada from '../components/Portada';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[#142850] text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FFFD4]/80">
      <Head>
        <title>Luis Eduardo Rivera Araya | XplenDev</title>
      </Head>

      { /* Header */}
      <Header socials={socials}/>

      { /* Hero */}
      <section id="hero" className="snap-start">
       <Portada pageInfo={pageInfo} />
      </section>

      { /* About */}
      <section  id="about" className="snap-center">
        <AcercaDeMi pageInfo={pageInfo}/>
      </section>

      { /* Experience */}
      <section  id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      { /* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>

      </section>

      { /* Proyects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      { /* Contact Me */}
      <section id="contact" className="snap-start">
        <Contacto />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-ponter hover:animate-ping"
            src="https://st2.depositphotos.com/7107694/10389/v/450/depositphotos_103895658-stock-illustration-arrow-up-flat-vector-icon.jpg"
            alt=""/>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
