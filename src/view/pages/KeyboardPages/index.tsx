// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Styles
import * as S from './styles';
import * as A from '../Main/styles';

//Book
import { ROOT, LESSON1, LESSON2, ACCORDION, LESSON3, LESSON4, STUDENTREGISTRATION, LESSON6, LESSON7 } from '../../routes/book';

const Keyboard: FC = () => {
    const arrayElemsNumber: Array<string> = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    const arrayElemsWord: Array<string> = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
    const arrayElemsWordTwo: Array<string> = [ 'Shift', 'z', 'x', 'c', 'v' ];
    const arrayElemsWordThree: Array<string> = [ ',', 'En' ];
    const arrayElemsWordFour: Array<string> = [ '.', 'Enter' ];
    const arrayWordGrid: Array<string> = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k' ];

    const getArray = (array: Array<string>, gridElems?: boolean) => {
        const newArray = array.map((elem: string) => {
            if (gridElems === true) {
                return (
                    <S.KeyboardElem
                        small
                        key = { elem }>
                        {elem}
                    </S.KeyboardElem>
                );
            }

            return (
                <S.KeyboardElem key = { elem }>
                    {elem}
                </S.KeyboardElem>
            );
        });

        return newArray;
    };

    return (
        <A.Inner>
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
                <NavigateBtn
                    lessonName = 'Lesson 7'
                    rootBookName = { LESSON7 }
                />
                <CurrentPageName pageName = 'Keyboard' />
                <NavigateBtn
                    lessonName = 'Accordion'
                    rootBookName = { ACCORDION }
                />
            </ColumnNavigation>
            <ColumnContent>
                <S.KeyboardWrapper>
                    {getArray(arrayElemsNumber)}
                    {getArray(arrayElemsWord)}
                    {getArray(arrayWordGrid, true)}
                    <S.KeyboardElem smallEnd>l</S.KeyboardElem>
                    {getArray(arrayElemsWordTwo)}
                    <S.KeyboardElem small>b</S.KeyboardElem>
                    <S.KeyboardElem >n</S.KeyboardElem>
                    <S.KeyboardElem small>m</S.KeyboardElem>
                    <S.KeyboardElem backspace>Backspace</S.KeyboardElem>
                    {getArray(arrayElemsWordThree)}
                    <S.KeyboardElem long >Space</S.KeyboardElem>
                    {getArray(arrayElemsWordFour)}
                </S.KeyboardWrapper>
            </ColumnContent>
            <ColumnInfo>
                <h4>Доп. задание</h4>
                <p>
                    В этом задании нужно создать keyboard с помощью grid сетки
                </p>
            </ColumnInfo>
        </A.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Keyboard />
    </ErrorBoundary>
);
