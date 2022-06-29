// Core
import React from 'react';
import styled from 'styled-components';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, NewsItemsFirst } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';


// Styles
import * as S from '../Main/styles';

export const NewsInner = styled.div`
  display: flex;
`;

// Book
import { ROOT, ACCORDION, KEYBOARD, LESSON2, LESSON3, LESSON4, STUDENTREGISTRATION, LESSON6, LESSON7 } from '../../routes/book';

const Lesson1 = () => {
    return (
        <S.Inner>
            <ColumnNavigation>
                <NavigateBtn
                    lessonName = 'Main'
                    rootBookName = { ROOT }
                />
                <CurrentPageName pageName = 'Lesson 1' />
                <NavigateBtn
                    lessonName = 'Lesson 2'
                    rootBookName = { LESSON2 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 3'
                    rootBookName = { LESSON3 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 4'
                    rootBookName = { LESSON4 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 5-6:Student Registration'
                    rootBookName = { STUDENTREGISTRATION }
                />
                <NavigateBtn
                    lessonName = 'Lesson 6:Student Profile Redux'
                    rootBookName = { LESSON6 }
                />
                <NavigateBtn
                    lessonName = 'Lesson 7'
                    rootBookName = { LESSON7 }
                />
                <NavigateBtn
                    lessonName = 'Keyboard'
                    rootBookName = { KEYBOARD }
                />
                <NavigateBtn
                    lessonName = 'Accordion'
                    rootBookName = { ACCORDION }
                />
            </ColumnNavigation>
            <ColumnContent>
                <NewsInner>
                    <NewsItemsFirst />
                </NewsInner>
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №1</h4>
                <p>
                    В этом задании нужно создать несколько компонентов, используя знания полученные на
                    уроке.
                </p>
                <h4>
                    Список компонентов
                </h4>
                <ul>
                    <li>
                        News
                    </li>
                    <li>
                        Article
                    </li>
                </ul>
                <p>
                    Данные компоненты являются основными и должны находится в директории components
                </p>
                <h4>
                    Список общих компонентов
                </h4>
                <ul>
                    <li>
                        Tag
                    </li>
                    <li>
                        CommentsCounter
                    </li>
                    <li>
                        LikesCounter
                    </li>
                </ul>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1 />
    </ErrorBoundary>
);
