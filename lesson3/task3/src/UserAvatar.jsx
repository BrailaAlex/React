import React from 'react';
const UserAvatar = (props) => {
    return(
        <img
            className ="avatar"
            src = {props.avatarUrl}
            name ={props.name}
        />
    )
}

export default UserAvatar;