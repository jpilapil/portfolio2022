import Link from "next/link";
import styles from "./Navigation.module.scss";

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

// how to pass the active state to show which page is active:
// use state dummy

export default function Navigation() {
  return (
    <nav
      className={`${styles.nav} navbar`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
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
          <div className="navbar-item">
            <Link href="/">
              <a className={`${styles.navBtn} button nav-link`}>HOME</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/about">
              <a className={`${styles.navBtn} button nav-link`}>ABOUT</a>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/contact">
              <a className={`${styles.navBtn} button nav-link`}>CONTACT</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
