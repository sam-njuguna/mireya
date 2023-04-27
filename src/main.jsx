import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter, useLocation } from "react-router-dom";
import "swiper/css";
const ScrollTop = () => {
  const { pathname } = useLocation;
  useEffect(() => window.scrollTo(0, 0), [pathname]);
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
