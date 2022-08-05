import { useState } from "react";
import styles from "./Contact.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [success, setSuccess] = useState(null);
  const [response, setResponse] = useState("");

  let formData = {
    name,
    message,
    contact,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(formData),
    }).then((res) => {
      switch (res.status) {
        case 200:
          setSuccess(true);
          setResponse("Your message has been received!");
          setName("");
          setMessage("");
          setContact("");
          break;
        case 400:
          setSuccess(false);
          setResponse("Please fill out all fields.");
          break;
        case 500:
          setSuccess(false);
          setResponse("Unable to send your message, please try again.");
          break;
        default:
          setSuccess(false);
          setResponse("Unable to send your message, please try again.");
          break;
      }
    });
  };

  return (
    <>
      <div className={`${styles.wrap}`}>
        <p className={`${styles.formText}`}>
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
          />
          . I want to connect because&nbsp;
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
      </div>

      <div
        className={`${
          success ? styles.success : styles.error
        } has-text-centered`}
      >
        <h1>{response}</h1>
      </div>
      <button
        className={`${styles.send} button`}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Send it
      </button>
    </>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="section is-medium" data-aos="fade-up">
      <h1 className={`${styles.header} has-text-left`}>Let&apos;s Connect</h1>
      <p className="mt-6">Want to connect? Fill out the form below!</p>
      <p>
        If you&apos;re old fashioned, you can&nbsp;
        <a href="mailto:justin.pilapil@yahoo.com" className={styles.clickable}>
          send me an email
        </a>
        .
      </p>
      <ContactForm />
    </section>
  );
}
