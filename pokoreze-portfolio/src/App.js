import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SFW from "./pages/SFW.jsx";
import NSFW from "./pages/NSFW.jsx";
import Commissions from "./pages/Commissions.jsx";
import Contact from "./pages/Contact.jsx";
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
        <Analytics />
      </div>
    </Router>
  );
}

export default App;