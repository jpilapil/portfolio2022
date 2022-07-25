import { useState } from "react";
import { v4 as getUuid } from "uuid";
import styles from "./Jobs.module.scss";

export default function Jobs() {
  // set initial state to first index of jobs array
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
    <section id="experience" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`}>Previous Roles</h1>
      <div className="columns">
        <div className="column is-4">
          {jobs.map((job, i) => (
            <button
              className={`${styles.companySelect} ${
                i === showJobInfo ? styles.selected : ""
              }`}
              aria-selected={showJobInfo === i ? true : false}
              aria-controls={`panel-${i}`}
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
