import Navbar from "../components/NavBar";
import styles from './landing.module.css';

export default function Landing() {
  return (
    <>
      <Navbar />
      <div id="landing" className={styles["landing-container"]}>
        <h1 className={styles["landing-title"]}>ryan james</h1>
        <h2 className={styles["landing-subtitle"]}>Aspiring Software Developer.</h2>
        <p className={styles["landing-text"]}>
          Building intelligent, interactive, and impactful software.
        </p>
      </div>
    </>
  );
}
