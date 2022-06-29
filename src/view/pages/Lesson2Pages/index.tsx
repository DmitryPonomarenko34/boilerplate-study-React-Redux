// Core
import React from 'react';
import styled from 'styled-components';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, NewsItemsTwo } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Tools
import { ROOT, ACCORDION, KEYBOARD, LESSON1, LESSON3, LESSON4, STUDENTREGISTRATION, LESSON6, LESSON7 } from '../../routes/book';

// Styles
import * as S from '../Main/styles';

export const NewsInner = styled.div`
  display: flex;
`;

const Lesson1 = () => {
    return (
        <S.Inner>
            <ColumnNavigation>
                <NavigateBtn
                    lessonName = 'Main'
                    rootBookName = { ROOT }
                />
                <NavigateBtn
                    lessonName = 'Lesson 1'
                    rootBookName = { LESSON1 }
                />
                <CurrentPageName pageName = 'Lesson 2' />
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
                    <NewsItemsTwo />
                </NewsInner>
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №2</h4>
                <p>
                    В этом задании нужно улучшить компоненты с предыдущего урока. Для этого нужно
                    добавить к компоненту News параметр source в который нужно передавать данные для
                    рендеринга. Данные находятся в файле source.json
                </p>
                <ul>
                    <li>
                        title
                    </li>
                    <li>
                        description
                    </li>
                    <li>
                        published
                    </li>
                    <li>
                        likes
                    </li>
                    <li>
                        comments
                    </li>
                    <li>
                        image
                    </li>
                    <li>
                        tags
                    </li>
                </ul>
                <p>
                    В этом задании нужно улучшить компонент LikesCounter с предыдущего урока.
                </p>
                <p>
                    Даный компонент имеет параметр counts , задача состоит в том чтобы добавить к этому
                    компоненту возможность при клике на сердечко увеличивать количество лайков.
                </p>

            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1 />
    </ErrorBoundary>
);
