import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 'github',
        };
    }
    onSelect = (user) => {
        this.setState({
            userId: user,
        });
    };
    render() {
        const { userId } = this.state;
        return (
            <div className="page__content">
            <h1>Users</h1>
            <span>{userId}</span>
                <div className="navigation">
                    <button
                        type="button"
                        className="navigation__item"
                        onClick={() => this.onSelect('github')}
                    >
                        Github
                    </button>
                    <button
                        type="button"
                        className="navigation__item"
                        onClick={() => this.onSelect('facebook')}
                    >
                        Facebook
                    </button>
                </div>
                {/* <ul className="navigation">
                <li className="navigation__item">
                    <a href="/users/github">Github</a>
                </li>
                <li className="navigation__item">
                    <a href="/users/facebook">Facebook</a>
                </li>
            </ul> */}
                <User userId={userId} />
            </div>
        );
    }
};

export default Users;