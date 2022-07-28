import styles from "./Footer.module.scss";
import Socials from "../socials";

export default function Footer() {
  return (
    <footer class={`${styles.footerContent} footer`}>
      <div class="content has-text-centered">
        <Socials isMobile={true} />
        <p>Built by Justin Pilapil.</p>
      </div>
    </footer>
  );
}
