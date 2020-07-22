import React from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
import './index.scss'

const App = () => {
    return (
        <div className="page">
            <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/users">Users</Link>
                </li>
            </ul>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/users">
                <Users /> 
            </Route>
        </div>
    );
};
export default App;