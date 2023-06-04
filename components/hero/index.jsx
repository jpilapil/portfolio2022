import styles from "./Hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="main"
      className="hero is-fullheight is-justify-content-center is-align-items-center section"
      data-aos="fade-up"
      data-aos-delay={500}
    >
      <div>
        <p className={styles.accent}>Hi, my name is</p>
        <h1 className={styles.largeHeader}>Justin Pilapil.</h1>
        <h1 className={styles.largeHeader}>I enjoy building dope @#$%.</h1>
        <p className={styles.bio}>
          I&apos;m a software developer who enjoys creating and designing
          exceptional digital experiences. Currently, I&apos;m focused on
          building an experience of a lifetime for guests at&nbsp;
          <a
            href="http://www.vailresorts.com/Corp/index.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.job}
          >
            Vail Resorts.
          </a>
        </p>
        <Link href="#contact">
          <button className={`${styles.heroButton} button`}>
            Get in contact
          </button>
        </Link>
      </div>
    </section>
  );
}
