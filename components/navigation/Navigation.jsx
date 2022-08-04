import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.scss";
import { sections, logo } from "./content";

// Need for bulma hamburger menu
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
}

export default function Navigation() {
  return (
    <nav
      className={`${styles.nav} navbar`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Image
            className={styles.logo}
            src={logo}
            alt="Fudder Logo"
            width={50}
            height={50}
          />
        </a>
        <a
          role="button"
          className="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu has-text-right" id="navMenu">
        <div className="navbar-end">
          {sections.map((section, i) => (
            <div className="navbar-item" key={i}>
              <Link href={section.path}>
                <a className={`${styles.navBtn} button nav-link`}>
                  {section.title}
                </a>
              </Link>
            </div>
          ))}
          <div className="navbar-item">
            <a
              href="https://docs.google.com/document/d/18R39a-n84GIXFGcOvysBccDm45usbMsevfbwTZyAoO4/edit?usp=sharing"
              className={`${styles.resume} button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
