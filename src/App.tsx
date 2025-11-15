import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import styles from './app.module.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className={styles["app-container"]}>
              <div className={styles["hero-section"]}>
                <Landing />
                <About />
                <Footer />
              </div>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
