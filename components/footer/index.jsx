import styles from "./Footer.module.scss";
import Socials from "../socials";

export default function Footer() {
  return (
    <footer className={`${styles.footerContent} footer`}>
      <div className="content has-text-centered">
        <Socials isLeft={false} />
        <p>Built by Justin Pilapil.</p>
      </div>
    </footer>
  );
}
