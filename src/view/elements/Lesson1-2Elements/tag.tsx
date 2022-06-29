// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Styles
export const TagElem = styled.span`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 6px 15px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
`;

// Types
type PropTypes = {
    tags: string | Array<string>;
}

export const Tag: FC<PropTypes> = ({ tags }) => {
    return <TagElem>{tags}</TagElem>;
};
