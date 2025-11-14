import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className=" h-screen w-screen bg-white flex flex-col">
              {/* Navigation bar*/}
                <div>
                  {/* Hero section */}
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
