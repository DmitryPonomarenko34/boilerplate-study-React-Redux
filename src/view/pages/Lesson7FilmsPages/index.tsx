// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, Lesson7FilmsComponents } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

//Styles
import * as S from '../Main/styles';

//Books
import { ROOT, LESSON1, KEYBOARD, LESSON2, LESSON3, ACCORDION, STUDENTREGISTRATION, LESSON6, LESSON4 } from '../../routes/book';

const Lesson7PersonPages: FC = () => {
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
                <CurrentPageName pageName = 'Lesson 7' />
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
                <S.Title>Подробная информация о фильме: </S.Title>
                <Lesson7FilmsComponents />
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №7</h4>
                <p>
                    Компонент People будет выводить имена всех персонажей, а компонент Person будет
                    выводить более детальную информацию про одного персонажа.
                    В качестве API ресурса используйте даный сервис: https://swapi.co/documentation#people
                </p>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson7PersonPages />
    </ErrorBoundary>
);
