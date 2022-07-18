import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Jobs from "../components/jobs";

const IndexPage = () => {
  return (
    <div className="container is-max-widescreen">
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
    </div>
  );
};
export default IndexPage;
