import { useState } from "react";
import styles from "./Contact.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  let formData = {
    name,
    message,
    contact,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(formData),
    });
  };

  // const handleNameChange = (e) => {
  //   setFormData({ ...formData, name: e.target.value });
  // };

  // const handleMessageChange = (e) => {
  //   setFormData({ ...formData, message: e.target.value });
  // };

  // const handleContactChange = (e) => {
  //   setFormData({ ...formData, contact: e.target.value });
  // };

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
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        and I am trying to contact you because&nbsp;
        <input
          type="text"
          className={styles.contactInput}
          id="message"
          aria-describedby="inputText"
          placeholder="your message"
          value={formData.message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        . I can be reached at&nbsp;
        <input
          type="email"
          className={styles.contactInput}
          id="email"
          aria-describedby="inputEmail"
          placeholder="your email/phone"
          value={formData.contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        , I am looking forward to chatting with you.
      </p>
      <button
        className={`${styles.send} button`}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        SEND IT
      </button>
    </>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="section is-medium">
      <h1 className={`${styles.header} has-text-left`}>Contact Me</h1>
      <div className={`${styles.wrap}`}>
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
    </section>
  );
}
