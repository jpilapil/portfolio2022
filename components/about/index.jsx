import styles from "./About.module.scss";
import Image from "next/image";

const Bio = () => {
  const skills = [
    "JavaScript (ES6+)",
    "Next.js",
    "React",
    "Solidiity",
    "Node.js",
    "Bulma",
  ];

  return (
    <div className="column has-text-left">
      <h1 className={styles.header}>About Me</h1>
      <p className="mt-6">
        Hey, my name is Justin, a software developer with over 3 years of
        professional experience. I consider myself a problem solver with
        creative visual solutions.
      </p>
      <br />
      <p>
        I enjoy exploring possibilities and am constantly searching for
        challenges to improve my skills. I belive that my job as a developer is
        more than just creating eye-catching, easy to use applications. It is
        more about closing the gap between the user and their goals while
        combining business goals with creative solutions.
      </p>
      <br />
      <p>Here are a few technologies I've been working with recently:</p>
      <br />
      <ul className={styles.skills}>
        {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
};

const Mugshot = () => {
  return <div className={`${styles.temp} column has-text-right`}></div>;
};

export default function About() {
  return (
    <section id="about" className="section columns is-medium">
      <Bio />
      <Mugshot />
    </section>
  );
}
