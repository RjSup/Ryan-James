import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/Projects";
import Contact from "./pages/Contact"
import styles from './app.module.css';
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className={styles["app-container"]}>
              <div className={styles["hero-section"]}>
                <div id="home">
                  <Landing />
                </div>
                <div id="projects">
                  <About />
                </div>
                <div id="contact">
                  <Contact />
                  <Footer />
                </div>
              </div>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
