import { useState } from "react";
import { v4 as getUuid } from "uuid";
import styles from "./Projects.module.scss";

const projectList = [
  {
    projectName: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem commodi veritatis non rerum, ullam illo unde quia inventore tempore magnam placeat, itaque similique laborum!",
    tech: ["react", "node", "express"],
  },
  {
    projectName: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem commodi veritatis non rerum, ullam illo unde quia inventore tempore magnam placeat, itaque similique laborum!",
    tech: ["react", "node", "express"],
  },
  {
    projectName: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem commodi veritatis non rerum, ullam illo unde quia inventore tempore magnam placeat, itaque similique laborum!",
    tech: ["react", "node", "express"],
  },
];

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
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
