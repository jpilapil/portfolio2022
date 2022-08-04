import styles from "./Socials.module.scss";
import { socials } from "./content";
import Image from "next/image";

export default function Socials({ isLeft }) {
  return (
    <div
      className={`${styles.iconContainer} ${
        isLeft ? "is-hidden-touch" : "is-hidden-desktop"
      }`}
      data-aos="fade-up"
      data-aos-delay={750}
    >
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
