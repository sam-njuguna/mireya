import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Blog, Contact, Detail, Home, Work } from "./pages";
import { Nav } from "./components";

function App() {
  return (
    <div>
      {/* <h1 class="outline-text">Hello World! 2</h1> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
