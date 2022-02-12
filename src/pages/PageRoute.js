import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./post";
import SuperHero from "./superhero";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SuperHero />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
};

export default PageRoute;
