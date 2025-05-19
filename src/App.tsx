import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./sections/Landing";
import WelcomeScreen from "./sections/WelcomeScreen";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="h-dvh">
              <WelcomeScreen />
              <Landing />
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
