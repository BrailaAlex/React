import React from 'react';
import Users from './Users';
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App =() => {
  return (
    <div className="page">
      <Router>
        <ul className="navigation">
          <li className="navigation__item"><Link to='/'>Home</Link></li>
          <li className="navigation__item"><Link to='/users'>Users</Link></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </Router>
    </div>
  );
};

export default App;