import React, { Component } from "react";
import { HashRouter, Route, Link, Routes } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

export const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </HashRouter>
  );
};
