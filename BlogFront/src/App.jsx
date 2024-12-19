import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

import BlogLayout from "./layout/BlogLayout";
import ProjectLayout from "./layout/ProjectLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div classNmae="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogLayout />}></Route>
          <Route path="/project" element={<ProjectLayout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
