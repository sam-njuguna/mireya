import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Detail, Home, Work } from "./pages";
import { Nav } from "./components";
import LoaderWrapper from "./hoc";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default LoaderWrapper(App,"");
