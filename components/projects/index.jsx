import { useState } from "react";
import { v4 as getUuid } from "uuid";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`}>Dope @#$%</h1>
      <div className="columns"></div>
    </section>
  );
}
