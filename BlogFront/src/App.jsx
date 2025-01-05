import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";

import BlogEdit from "./pages/Blog/BlogEdit";
import BlogLists from "./pages/Blog/BlogLists";

import BlogLayout from "./layout/BlogLayout";
import ProjectLayout from "./layout/ProjectLayout";
import IntroLayout from "./layout/IntroLayout";

const App = () => {
  return (
    <BrowserRouter>
      <div classNmae="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route path="" element={<BlogLists />} />
            <Route path="edit" element={<BlogEdit />} />
          </Route>
          <Route path="/project" element={<ProjectLayout />}></Route>
          <Route path="/intro" element={<IntroLayout />}>
            <Route path="" element={<IntroPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
