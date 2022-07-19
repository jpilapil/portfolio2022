import { useState } from "react";
import { v4 as getUuid } from "uuid";
import styles from "./Jobs.module.scss";

export default function Jobs() {
  const [showJobInfo, setShowJobInfo] = useState(0);

  const toggleJobInfo = (i) => {
    setShowJobInfo(i);
  };

  const jobs = [
    {
      id: getUuid(),
      title: "Software Developer",
      company: "Concierge Software Design",
      date: "April 2021 - Present",
      description: ["test1", "test2", "test3"],
    },

    {
      id: getUuid(),
      title: "Front End Engineer",
      company: "IONnovate",
      date: "September 2020 - February 2021",
      description: ["test1", "test2", "test3"],
    },
    {
      id: getUuid(),
      title: "Web Developer (Contract)",
      company: "Refined Living",
      date: "January 2019 - December 2020",
      description: ["test1", "test2", "test3"],
    },
  ];

  return (
    <section id="jobs" className="section is-medium">
      <h1 className={`${styles.header} has-text-right`}>Previous Roles</h1>
      <div className="columns">
        <div className="column is-4">
          {jobs.map((job, i) => (
            <button
              className={`${styles.companySelect}`}
              onClick={() => toggleJobInfo(i)}
              key={i}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="column has-text-left">
          {jobs.map((job, i) => {
            return (
              <div
                key={i}
                hidden={i !== showJobInfo}
                className={`${styles.jobInfo}`}
                // className={`${styles.jobInfo} ${
                //   showJobInfo === i ? "is-visible" : "is-hidden"
                // }`}
              >
                <h3>
                  {job.title}
                  <span className={styles.company}>
                    &nbsp;@&nbsp;{job.company}
                  </span>
                </h3>
                <p className={styles.date}>{job.date}</p>
                <ul className={styles.jobDesc}>
                  {job.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
