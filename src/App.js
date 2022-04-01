import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies"
import Series from "./components/Series"
//
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </ul>
          </nav>

          
            <Route path="/Series">
              <Series />
            </Route>
            <Route path="/Movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>          
        </div>
      </Router>
    );
  }
}

export default App;