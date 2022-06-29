// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styles
export const Button = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #fff;
    padding: 11px 0 11px 40px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    display: block;
    cursor: pointer;
    &:hover {
        background: rgba(0, 0, 0, 0.5);
        transition: ease background 0.2s;
    }
`;

// Types
type PropTypes = {
    lessonName: string;
    rootBookName: string;
}

export const NavigateBtn: FC<PropTypes> = ({ lessonName, rootBookName }) => {
    const navigate = useNavigate();

    return (
        <Button onClick = { () => navigate(rootBookName) } >
            {lessonName}
        </Button>
    );
};
