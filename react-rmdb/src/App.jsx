import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";

import Home from "./routes/Home";
import Movie from "./routes/Movie";
import NotFound from "./routes/NotFound";

import NewHome from "./routes/NewHome";
import NewMovie from "./routes/NewMovie";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/:movieId" element={<NewMovie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </>
  );
};

export default App;
