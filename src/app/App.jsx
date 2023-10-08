import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import ParticlesBackground from "../components/ParticlesBackground";
import { Socialicons } from "../components/socialicons";
import { colors } from "../content_option";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home";
import About from "../pages/about";
import Blog from "../pages/blog";
import Contact from "../pages/contact";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const location = useLocation();
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className={"w-100 h-100 position-fixed"}>
        <ParticlesBackground
          bg={"transparent"}
          color={colors[theme]["particles-color"]}
        />
      </div>

      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="256, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/blog" element={<Blog theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </AnimatePresence>

      <Headermain themeToggle={themeToggle} theme={theme} />
      <Socialicons />
    </>
  );
}
