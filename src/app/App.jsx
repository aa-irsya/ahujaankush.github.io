import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import ParticlesBackground from "../components/ParticlesBackground";
import { colors } from "../content_option";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
      <ScrollToTop>
        <Headermain themeToggle={themeToggle} />
        <AppRoutes theme={theme} />
      </ScrollToTop>
    </Router>
  );
}
