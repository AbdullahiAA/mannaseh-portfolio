import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/global/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Contact */}
        </main>

        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

export default App;
