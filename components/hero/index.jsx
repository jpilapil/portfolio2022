import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="main" className="hero is-fullheight is-justify-content-center">
      <div className="m-auto">
        <p className={styles.accent}>Hi, my name is</p>
        <h1 className={styles.largeHeader}>Justin Pilapil.</h1>
        <h1 className={styles.largeHeader}>I enjoy building dope @#$%.</h1>
        <p className={styles.bio}>
          I’m a software developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building custom software solutions for clients at Concierge Software
          Design.
        </p>
        <button className={`${styles.heroButton} button`}>
          Get in contact
        </button>
      </div>
    </section>
  );
}
