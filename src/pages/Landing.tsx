import styles from './landing.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import example from '../assets/examplehome.png';

export default function Landing() {
  return (
    <>
      <div className={styles["landing-container"]}>
        <div className={styles["left-section"]}>
          <h1 className={styles["landing-title"]}>Ryan James</h1>
          <h2 className={styles["landing-subtitle"]}>Aspiring Software Developer.</h2>
          <p className={styles["landing-text"]}>
            Building intelligent, interactive, and impactful software.
          </p>

          <div className={styles["social-links"]}>
            <a className={styles["github-link"]} href="https://github.com/RjSup">
              <i className={styles["github-icon"]}><FaGithub /></i>
            </a>
            <a className={styles["linkedin-link"]} href="https://www.linkedin.com/in/rjsup">
              <i className={styles["linkedin-icon"]}><FaLinkedin /></i>
            </a>
          </div>
        </div>

        <div className={styles["right-section"]}>
          {/* image */}
          <div className={styles["image-placeholder"]} >
            <img alt="" src={example} className={styles["profile-image"]} />
          </div>
        </div>
      </div>
    </>
  );
}
