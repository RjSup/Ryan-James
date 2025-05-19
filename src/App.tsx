import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="bg-gray-50">
              <h1 className="text-3xl font-bold text-center py-20">
                Portfolio
              </h1>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}
