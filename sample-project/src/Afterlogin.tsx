import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";

const Afterlogin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact/:id" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Afterlogin;
