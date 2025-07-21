import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main >
              {/* Navigation bar*/}
                  <NavBar />
              {/* Hero section */}
                  <Landing />
              
                {/* About section */}
                  <About />
              
                {/* Portfolio section */}
                  <Portfolio />
              
                {/* Contact section */}
                  <Contact />

                {/* Footer */}
                  <Footer />
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
