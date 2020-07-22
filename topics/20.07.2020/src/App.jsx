import React from 'react';
import Users from './Users';

const App = () => {
    return (
        <div className="page">
            <ul className="navigation">
                <li className="navigation__item">
                    <a href="/">Home</a>
                </li>
                <li className="navigation__item">
                    <a href="/users">Users</a>
                </li>
        </ul>
        <Users />
        </div>
    );
};
export default App;