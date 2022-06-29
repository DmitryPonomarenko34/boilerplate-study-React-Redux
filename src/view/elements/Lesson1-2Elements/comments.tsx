// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Bus
// import {} from '../../../bus/'

// Styles
export const CommentsCounter = styled.span`
  font-family: Helvetica;
  margin-right: 15px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  &::before {
    content: '👋';
    display: inline;
    font-size: 15px;
    opacity: 0.7;
  }
`;

// Types
type PropTypes = {
    comments: number;
}

export const CommentsCount: FC<PropTypes> = ({ comments }) => {
    return (
        <CommentsCounter>
            {comments}
        </CommentsCounter>
    );
};
