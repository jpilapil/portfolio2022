import { v4 as getUuid } from "uuid";
import styles from "./Jobs.module.scss";

export default function Jobs() {
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
  return (
    <div id="jobs" className="column is-half is-offset-one-half has-text-left">
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
}
