// Core
import React, { FC } from 'react';

// Types
type PropTypes = {
    name: string;
    username: string;
    email: string;
}

export const User: FC<PropTypes> = ({ name, username, email }) => {
    return (
        <div>
            <ul>
                <li>
                    Name: {name},
                </li>
                <li>
                    UserName: {username},
                </li>
                <li>
                    UserEmail: {email},
                </li>
            </ul>
        </div>
    );
};
