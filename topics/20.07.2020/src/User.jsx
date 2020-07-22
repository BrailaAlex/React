import React from 'react';

class User extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
        }
    }

    fetchUserData = () => {
        fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Oops');
                }
                return response.json();
            })
            .then((data) => {
                this.setState({
                userData: data,
            })
        })
    }
    
    componentDidMount() {
        this.fetchUserData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.fetchUserData();
        }
    }

    render() {
        const { userData } = this.state;
        if (!userData) {
            return null;
        }
        const { name, avatar_url, location } = userData;
        return (
            <div className="user">
                <img
                    alt="User Avatar"
                    src={avatar_url}
                    className="user__avatar"
                />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        );
    }
};

export default User;