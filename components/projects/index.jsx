import styles from "./Projects.module.scss";
import Image from "next/image";
import { projectList } from "./content";

export default function Projects() {
  return (
    <section id="projects" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`} data-aos="fade-up">
        Projects
      </h1>
      {projectList &&
        projectList.map((project, i) => (
          <div
            className={styles.projectGrid}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <figure className={`${styles.imageWrapper} image`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  className={styles.projectImage}
                  src={project.src}
                  alt={project.name}
                  draggable={false}
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </a>
            </figure>
            <div className={styles.content}>
              <a
                href={project.url}
                className={styles.title}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className={styles.icons}>
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
                  <li key={i} className={styles.comingSoon}>
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
