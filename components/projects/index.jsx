import { useState } from "react";
import styles from "./Projects.module.scss";

export default function Projects() {
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
    <div id="projects" className="column is-6 ">
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
}
