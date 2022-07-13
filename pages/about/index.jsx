import { v4 as getUuid } from "uuid";
import styles from "./About.module.scss";

const jobs = [
  {
    id: getUuid(),
    title: "Partner / Developer",
    company: "Luna Luxe Crystals",
    date: "February 2022 - Present",
    location: "Remote",
  },
  {
    id: getUuid(),
    title: "Software Developer",
    company: "Concierge Software Design",
    date: "April 2021 - Present",
    location: "Las Vegas, NV",
  },

  {
    id: getUuid(),
    title: "Front End Engineer",
    company: "IONnovate",
    date: "September 2020 - February 2021",
    location: "Remote",
  },
  {
    id: getUuid(),
    title: "Web Developer (Contract)",
    company: "Refined Living",
    date: "January 2019 - December 2020",
    location: "Las Vegas, NV",
  },
];

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

const Experience = () => {
  return (
    <div className="column is-half is-offset-one-half has-text-left">
      <h1 className={styles.header}>EXPERIENCE</h1>
      <table className="table is-fullwidth mt-6">
        <tbody>
          {jobs.map((job) => {
            return (
              <tr key={job.id}>
                <td className={styles.date}>{job.date}</td>
                <td>
                  {job.title} at&nbsp;
                  <span className={styles.company}>{job.company}</span>
                </td>
                <td>{job.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default function About() {
  return (
    <div
      className={`${styles.topSpace} hero is-fullheight columns is-justify-content-center is-align-items-center`}
    >
      <Bio />
      <Experience />
    </div>
  );
}
