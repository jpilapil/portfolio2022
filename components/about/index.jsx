import styles from "./About.module.scss";

const Bio = () => {
  return (
    <div className="column has-text-left">
      <h1 className={styles.header}>About me</h1>
      <p className="mt-6">
        Hey, my name is Justin, a software developer with strong design
        aesthetic and principles. I have over 3 years of professional experience
        and consider myself a problem solver with creative visual solutions.
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
      <table className="table is-fullwidth">
        <tbody>
          <tr>
            <td className={styles.tech}>JavaScript (ES6+)</td>
            <td className={styles.tech}>Next.js</td>
          </tr>
          <tr>
            <td className={styles.tech}>React</td>
            <td className={styles.tech}>Solidity</td>
          </tr>
          <tr>
            <td className={styles.tech}>Node.js</td>
            <td className={styles.tech}>Bulma</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Mugshot = () => {
  return <div className={`${styles.temp} column has-text-right`}></div>;
};

export default function About() {
  return (
    <section id="about" className="columns">
      <Bio />
      <Mugshot />
    </section>
  );
}
