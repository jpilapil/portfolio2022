import styles from "./About.module.scss";

const Bio = () => {
  return (
    <div className="column is-half is-offset-one-half has-text-left">
      <h1 className={styles.header}>ABOUT</h1>
      <p className="mt-6">
        Hey, my name is Justin, a Las Vegas based software developer with strong
        design aesthetic and principles. I have over 3 years of professional
        experience and consider myself a problem solver with creative visual
        solutions.
      </p>
      <p>
        I enjoy exploring possibilities and am constantly searching for
        challenges to improve my skills. I belive that my job as a developer is
        more than just creating eye-catching, easy to use applications. It is
        more about closing the gap between the user and their goals while
        combining business goals with creative solutions.
      </p>
      <p>
        View my GitHub to check out the different public projects I might be
        working on, or contact me here if you would like to learn more about me.
      </p>
    </div>
  );
};
export default function About() {
  return (
    <div
      id="about"
      className={`${styles.topSpace} hero is-fullheight columns is-justify-content-center is-align-items-center`}
    >
      <Bio />
    </div>
  );
}
