import Navbar from "../components/NavBar";
import styles from './landing.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className={styles["landing-container"]}>
        <div className={styles["left-section"]}>
          <h1 className={styles["landing-title"]}>ryan james</h1>
          <h2 className={styles["landing-subtitle"]}>Aspiring Software Developer.</h2>
          <p className={styles["landing-text"]}>
            Building intelligent, interactive, and impactful software.
          </p>

          <div className={styles["social-links"]}>
            <a className={styles["github-link"]} href="https://github.com/RjSup"><FaGithub /></a>
            <a className={styles["linkedin-link"]} href="https://www.linkedin.com/in/rjsup"><FaLinkedin /></a>
          </div>
        </div>

        <div className={styles["right-section"]}>
          {/* image */}
          <div className={styles["image-placeholder"]} ></div>
        </div>
      </div>
    </>
  );
}
