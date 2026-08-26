import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SFW from "./pages/SFW";
import NSFW from "./pages/nsfw";
import Commissions from "./pages/commissions";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app light"}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/sfw" element={<SFW />} />
          <Route path="/nsfw" element={<NSFW />} />
          <Route path="/commissions" element={<Commissions darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;