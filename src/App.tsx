import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import styles from './app.module.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className={styles["app-container"]}>
              {/* Hero section */}
              <div className={styles["hero-section"]}>
                <Landing />
              </div>
              {/* Footer */}
              <Footer />
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
