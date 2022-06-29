// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
export const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0 !important;
    font-size: 16px;
    color: #fff;
    padding: 11px 0 11px 40px;
    border: none;
    border-radius: 5px;
    width: auto;
    text-align: center;
    display: block;
    background: rgba(0, 0, 0, 0.5);
`;

// Types
type PropTypes = {
    pageName: string;
}

export const CurrentPageName: FC<PropTypes> = ({ pageName }) => {
    return (
        <Text>
            Page: {pageName}
        </Text>
    );
};
