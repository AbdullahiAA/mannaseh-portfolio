import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/global/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Contact from "./components/global/Contact";
import Footer from "./components/global/Footer";
import Mentorship from "./pages/Mentorship";
import Investments from "./pages/Investments";
import CryptoNuggets from "./pages/CryptoNuggets";
import ScrollToTop from "./components/global/ScrollToTop";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/cryto-nuggets" element={<CryptoNuggets />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Contact />
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
