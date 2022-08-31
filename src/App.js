import React from "react";
import Filmes from "./Components/Filmes";
import Series from "./Components/Series";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Page API</h1>
        <div>
          <ul>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/filmes">Filmes</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/series" element={<Series />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>
      </Router>
    );
  }
}
