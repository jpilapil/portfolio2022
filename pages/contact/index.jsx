import { useState } from "react";
import styles from "./Contact.module.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    contact: "",
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  const handleContactChange = (e) => {
    setFormData({ ...formData, contact: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <p className={`${styles.formText} is-size-4 my-6`}>
        What&apos;s up Justin, my name is&nbsp;
        <input
          type="text"
          className={styles.contactInput}
          id="name"
          aria-describedby="inputName"
          placeholder="your name"
          value={formData.name}
          onChange={handleNameChange}
        />{" "}
        and I am trying to contact you because&nbsp;
        <input
          type="text"
          className={styles.contactInput}
          id="message"
          aria-describedby="inputText"
          placeholder="your message"
          value={formData.message}
          onChange={handleMessageChange}
        />
        . I can be reached at&nbsp;
        <input
          type="email"
          className={styles.contactInput}
          id="email"
          aria-describedby="inputEmail"
          placeholder="your email/phone"
          value={formData.contact}
          onChange={handleContactChange}
        />
        , I am looking forward to chatting with you.
      </p>
      <button className={`${styles.send} button`} onClick={handleSubmit}>
        SEND IT
      </button>
    </>
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
          Want to chat? fill in the blanks below. If you&apos;re old fashioned,
          you can&nbsp;
          <a
            href="mailto:justin.pilapil@yahoo.com"
            className={styles.clickable}
          >
            send me an email
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
