import styles from "./Socials.module.scss";
import { socials } from "./content";
import Image from "next/image";

export default function Socials() {
  return (
    <div className={`${styles.iconContainer} is-hidden-mobile`}>
      {socials &&
        socials.map((social, i) => (
          <li key={i} className={styles.icons}>
            <a href={social.url}>
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
              />
            </a>
          </li>
        ))}
    </div>
  );
}