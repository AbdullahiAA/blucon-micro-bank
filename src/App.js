import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OpenAccount from "./pages/OpenAccount";
import Services from "./pages/Services";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<OpenAccount />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
