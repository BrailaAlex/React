import React from 'react';
import User from './User.jsx';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App =() => {
  return (
    <div className="page">
      <Router>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route path="/">
            <span>Select a user please</span>
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;