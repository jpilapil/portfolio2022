import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";

const HeroName = () => {
  return (
    <div className="column is-6 has-text-centered m-auto">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className={styles.name}
      >
        JUSTIN
      </h1>
      <h1
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        className={styles.name}
      >
        PILAPIL
      </h1>
    </div>
  );
};

const Projects = () => {
  const projects = ["test", "test", "test"];
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="column is-6 ">
      <h1 className={`${styles.header} has-text-centered-mobile`}>PROJECTS</h1>
      <div className="columns">
        <div className="column is-6 has-text-centered-mobile">
          <div key={projects[activeStep].id} id={styles.temp}></div>
        </div>
        <div className={`${styles.desc} column is-6 ml-5-mobile`}>
          <h2 className={styles.title}>project name</h2>
          <p>project desc</p>

          <button
            className={`${styles.backNext} button pl-0`}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            BCK
          </button>
          <span id={styles.line}></span>
          <button
            className={`${styles.backNext} button`}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            NXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className={`${styles.topSpace} hero is-fullheight is-justify-content-center`}
    >
      <div className=" container columns is-desktop">
        <HeroName />
        <Projects />
      </div>
    </div>
  );
}
