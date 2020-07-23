import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import User from './User';

const Users = ({match}) => {

        return (
            <div className="page__content">
            <h1>Users</h1>
                <ul className="navigation">
                <li className="navigation__item">
                    <Link to={`${match.url}/github`}>Github</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`${match.url}/facebook`}>Facebook</Link>
                </li>
                <li className="navigation__item">
                    <Link to={`${match.url}/microsoft`}>Microsoft</Link>
                </li>
                </ul>
                <Switch>
                <Route path={`${match.path}/:userId`} component={User} />
                    <Route><span>Select a user</span></Route>
                </Switch>
            </div>
        );
};

export default Users;