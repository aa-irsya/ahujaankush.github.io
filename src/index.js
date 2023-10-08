import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/*" element={<App />}></Route>
    </Routes>
  </Router>,
);
