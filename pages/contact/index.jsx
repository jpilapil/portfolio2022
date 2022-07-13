import styles from "./Contact.module.scss";

const ContactForm = () => {
  return (
    <p className={`${styles.formText} is-size-4 my-6`}>
      What's up Justin, my name is&nbsp;
      <input
        type="text"
        className={styles.contactInput}
        id="input-name"
        aria-describedby="inputName"
        placeholder="your name"
      />{" "}
      and I can be reached at&nbsp;
      <input
        type="email"
        className={styles.contactInput}
        id="input-email"
        aria-describedby="emailHelp"
        placeholder="your email/phone"
      />
      . I'm trying to contact you because&nbsp;
      <input
        type="text"
        className={styles.contactInput}
        id="input-text"
        aria-describedby="inputText"
        placeholder="your message"
      />
      .
    </p>
  );
};

export default function Contact() {
  return (
    <div
      className={`${styles.topSpace} hero is-fullheight columns is-justify-content-center is-align-items-center`}
    >
      <div className="column is-half is-offset-one-half has-text-left">
        <h1 className={styles.header}>Contact</h1>
        <p className="mt-6">
          Want to chat? fill in the blanks below. If you're old fashioned, you
          can&nbsp;
          <a
            href="mailto:justin.pilapil@yahoo.com"
            className={styles.clickable}
          >
            send me an email
          </a>
          .
        </p>
        <ContactForm />
        <button className={`${styles.send} button`}>SEND IT</button>
      </div>
    </div>
  );
}
