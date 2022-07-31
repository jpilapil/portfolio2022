import styles from "./Projects.module.scss";
import Image from "next/image";
import { projectList } from "./content";

export default function Projects() {
  return (
    <section id="projects" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`}>Projects</h1>
      {projectList &&
        projectList.map((project, i) => (
          <div className={styles.projectGrid} key={i}>
            <figure className={`${styles.imageWrapper} image`}>
              <a href={project.url}>
                <Image
                  className={styles.projectImage}
                  src={project.src}
                  alt={project.name}
                  draggable={false}
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </figure>
            <div className={styles.content}>
              <a href={project.url} className={styles.title}>
                {project.projectName}
              </a>
              <div className={styles.desc}>
                <p>{project.desc}</p>
              </div>
              <ul className={styles.tech}>
                {project.tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul className={styles.tech}>
                {project.externals &&
                  project.externals.map((item, i) => (
                    <a href={item.url}>
                      <li key={i} className={styles.icons}>
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={20}
                          height={20}
                        />
                      </li>
                    </a>
                  ))}
                {project.comingSoon && (
                  <li className={styles.comingSoon}>
                    Current project: Coming Soon!
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
    </section>
  );
}
