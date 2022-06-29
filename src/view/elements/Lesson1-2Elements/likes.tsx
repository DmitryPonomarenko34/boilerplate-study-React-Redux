// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Tools
import { blue } from '../../../assets/colors/blue';

// Styles
export const Likes = styled.div<StyleTypes>`
  display: flex;
  align-items: center;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    &::before {
      opacity: 1;
      color: ${blue[ 900 ]};
      transition: ease 0.2s color, ease 0.2s opacity;
    }
  }

  &::before {
    content: '♥';
    display: inline-block;
    margin-right: 5px;
    font-size: 25px;
    opacity: ${(props) => props.bool ? '1' : '0.7'};
    transition: ease 0.2s color, ease 0.2s opacity;
    ${(props) => props.bool
        ? `color: ${blue[ 900 ]}`
        : ''
};
  }
`;

// Types
type PropTypes = {
    likes: number;
}

type StyleTypes = {
    bool?: boolean;
}

export const LikesCounter: FC<PropTypes> = ({ likes }) => {
    const [ value, setValue ] = useState(likes);
    const [ boolValue, setBool ] = useState(false);

    return (
        <Likes
            bool = { boolValue }
            onClick = { (): void => {
                setValue(value > likes ? likes : value + 1);
                setBool(!boolValue);
            } }>
            {value}
        </Likes>
    );
};
