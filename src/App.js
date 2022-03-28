import "./App.css";
import Header from "./components/global/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Home />

        {/* Contact */}
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
