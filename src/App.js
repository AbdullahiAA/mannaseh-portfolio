import "./App.css";
import Header from "./components/global/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Home />

        <Experience />

        {/* Contact */}
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
