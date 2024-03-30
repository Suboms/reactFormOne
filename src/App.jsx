import React from "react";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Settings from "./components/Settings";
import Contact from "./components/Contacts";
import Home from "./components/Home";

function App() {
  const navLink = [
    { link: "/", linkText: "home" },
    { link: "/about", linkText: "about" },
    { link: "/contacts", linkText: "contacts" },
    { link: "/settings", linkText: "settings" },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar navItem={navLink} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Form />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
