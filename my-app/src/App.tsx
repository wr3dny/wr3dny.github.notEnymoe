import React, { Component } from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

type HomeProps = {};
type AboutProps = {};

const Home: React.FC<HomeProps> = () => {
  return <h2>Home</h2>;
};

const About: React.FC<AboutProps> = () => {
  return <h2>About</h2>;
};

const Hobby: React.FC<AboutProps> = () => {
  return <h2>Hobby</h2>;
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
          <li>
            <Link to="/hobby">Hobby</Link>
          </li>
          <li>
            <Link to="/work">work</Link>
          </li>
        </ul>

        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/work" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
