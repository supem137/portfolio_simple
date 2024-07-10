import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import About from '../about/About';

const Home = () => {
  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
