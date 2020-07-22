import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import User from './User';

const Users = () => {

        return (
            <div className="page__content">
            <h1>Users</h1>
                <ul className="navigation">
                <li className="navigation__item">
                    <Link to="/users/github">Github</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/users/facebook">Facebook</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/users/microsoft">Microsoft</Link>
                </li>
            </ul>
                <Route path="/users/:userId" component={User} />
            </div>
        );
};

export default Users;