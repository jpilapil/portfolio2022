import styles from "./About.module.scss";
import Image from "next/image";
import { technologies } from "./content";

const Bio = () => {
  return (
    <div className="column has-text-left">
      <h1 className={styles.header}>About Me</h1>
      <p className="mt-6">
        Hey, my name is Justin, a software developer with over 3 years of
        professional experience. I consider myself a problem solver with
        creative visual solutions. I enjoy exploring possibilities and am
        constantly searching for challenges to improve my skills.
      </p>
      <br />
      <p>
        I belive that my job as a developer is more than just creating
        eye-catching, easy to use applications. It is more about closing the gap
        between the user and their goals while combining business goals with
        creative solutions. In my free time, I am currently dabbling in the
        world of cryptocurrency, blockchain, and game development.
      </p>
      <br />
      <p>Here are a few technologies I&apos;ve been working with recently:</p>
      <br />
      <ul className={styles.technologies}>
        {technologies && technologies.map((tech, i) => <li key={i}>{tech}</li>)}
      </ul>
    </div>
  );
};

const Mugshot = () => {
  return (
    <div className={`${styles.imageWrapper} column m-auto has-text-centered`}>
      <Image
        className={styles.mugshot}
        src="/mugshot/fudder.png"
        alt="Justin Pilapil"
        width={350}
        height={350}
      />
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section columns is-medium">
      <Bio />
      <Mugshot />
    </section>
  );
}
