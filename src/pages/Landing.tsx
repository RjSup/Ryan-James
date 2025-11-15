import Navbar from "../components/NavBar";
import styles from './landing.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Example from '../../public/example2.jpg'

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
            <img alt="" src={Example} className={styles["profile-image"]} />
          </div>
        </div>
      </div>
    </>
  );
}
