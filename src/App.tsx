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
            <main className="h-screen w-full bg-gradient-to-r from-[#CACCCC] via-[#DFE0DA] to-[#F0F0E4] flex flex-col">
              {/* Navigation bar*/}
              <NavBar />
                <div className="h-screen flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                  {/* Hero section */}
                  <Landing />
                  {/* About section */}
                  <About />
                  {/* Portfolio section */}
                  <Portfolio />
                  {/* Contact section */}
                  <Contact />
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
