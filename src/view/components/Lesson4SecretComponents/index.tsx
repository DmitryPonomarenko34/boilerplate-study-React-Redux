// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

//Types
type PropTypes = {
    value: string;
}
export const Secret: FC<PropTypes> = () => {
    let { value } = useParams();

    return (
        <p>My Secret: {value}</p>
    );
};
