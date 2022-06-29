// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, AccordionItem } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Styles
import * as S from '../Main/styles';

// Tools
import { useArrayOfStringsForm } from '../../../tools/hooks';

//Types
type PropsType = {
    accordionTitle?: string;
}

//Book
import { ROOT, LESSON1, KEYBOARD, LESSON2, LESSON3, LESSON4, LESSON6, STUDENTREGISTRATION, LESSON7 } from '../../routes/book';

const date = [
    {
        question: '1. What business are you doing?',
        answer:   'In the past few years India has made attempts\n'
            + 'to get back several historic items.Some historians\n'
            + 'claim that the Kohinoor was taken away from India by force.',
        id: '0',
    },
    {
        question: '1. What business are you doing?',
        answer:   'In the past few years India has made attempts\n'
            + 'to get back several historic items.Some historians\n'
            + 'claim that the Kohinoor was taken away from India by force.',
        id: '1',
    },
    {
        question: '1. What business are you doing?',
        answer:   'In the past few years India has made attempts\n'
            + 'to get back several historic items.Some historians\n'
            + 'claim that the Kohinoor was taken away from India by force.',
        id: '2',
    },
];

const Accordion: FC<PropsType> = (props) => {
    const [ arrayOfStrings, arrayOfStringsHandle ] = useArrayOfStringsForm([]);
    const { accordionTitle } = props;

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
                <NavigateBtn
                    lessonName = 'Lesson 7'
                    rootBookName = { LESSON7 }
                />
                <NavigateBtn
                    lessonName = 'Keyboard'
                    rootBookName = { KEYBOARD }
                />
                <CurrentPageName pageName = 'Accordion' />
            </ColumnNavigation>
            <ColumnContent>
                <h1>
                    {accordionTitle}
                </h1>
                {
                    date.map((accordionItem, index) => (
                        <AccordionItem
                            isSelected = { arrayOfStrings.includes(accordionItem.id) }
                            key = { index }
                            onClick = { () => void arrayOfStringsHandle(accordionItem.id) }
                            { ...accordionItem }
                        />
                    ))
                }
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание No3</h4>
                <p>
                    В этом задании нужно создать компонент-акордеон.
                </p>
                <p>
                    Макет к этому заданию находится в файле template.png
                </p>
                <p>
                    Даный компонент имеет параметр source в который он принимают массив с такой
                    структурой:
                </p>
                <code>
                    <pre>{`
                            [
                                {
                                    question: 'What is your name?',
                                    answer: 'My name is Andrii'
                                }
                            ]
                            `}
                    </pre>
                </code>
            </ColumnInfo>
        </S.Inner>
    );
};

Accordion.defaultProps = {
    accordionTitle: 'Accordion',
};

export default () => (
    <ErrorBoundary>
        <Accordion />
    </ErrorBoundary>
);
