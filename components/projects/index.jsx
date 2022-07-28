import styles from "./Projects.module.scss";
import { projectList } from "./content";

export default function Projects() {
  return (
    <section id="projects" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`}>Projects</h1>
      {projectList.map((project, i) => (
        <div className={styles.projectGrid} key={i}>
          <div className={styles.projectImage}>
            <img
              className={styles.imageTemplate}
              src="https://picsum.photos/200"
              alt="project"
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{project.projectName}</h3>
            <div className={styles.desc}>
              <p>{project.desc}</p>
            </div>
            <ul className={styles.tech}>
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
