// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Components
import { ArticleItemFirst } from '../Lesson1ArticleComponents';

//Styles
const Container = styled.section`
    display: flex;
`;

export const NewsItemsFirst: FC = () => {
    return (
        <Container>
            <ArticleItemFirst />
            <ArticleItemFirst />
            <ArticleItemFirst />
        </Container>
    );
};
