import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

import Home from "./routes/Home";
import Movie from "./routes/Movie";
import NotFound from "./routes/NotFound";

import styled from "styled-components";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <div className="spaced-footer"></div>

      <GlobalStyle />
    </>
  );
};
export default App;
