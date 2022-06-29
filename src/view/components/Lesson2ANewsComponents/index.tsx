// Core
import React from 'react';
import styled from 'styled-components';
//Action
import * as date from '../../pages/Lesson2Pages/date/source.json';

// Components
import { ArticleItemUpgrade } from '../Lesson2ArticleComponents';

//Styles
const Container = styled.section`
    display: flex;
`;

export const NewsItemsTwo = () => {
    return (
        <Container>
            {
                Array.from(date).map((article, index) => (
                    <ArticleItemUpgrade
                        { ...article }
                        key = { index }
                    />
                ))
            }
        </Container>
    );
};
