// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, Contacts, Secret } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

//Styles
import * as S from '../Main/styles';

//Books
import { ROOT, LESSON1, KEYBOARD, LESSON2, LESSON3, ACCORDION, STUDENTREGISTRATION, LESSON6, LESSON7 } from '../../routes/book';

const Lesson4Pages: FC = () => {
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
                <CurrentPageName pageName = 'Lesson 4'/>
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
                <Contacts />
                <Secret value = ':value'/>
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №4</h4>
                <p>
                    В этом задании необходимо создать компонет Contacts внутри директории
                    components/Lesson4ContactsComponents с
                    содержимым
                </p>
                <p>
                    Затем необходимо создать компонент Contacts внутри директории pages/Lesson4Pages , данный
                    компонент должен подключать и рендерить компонент Contacts из директории
                    components/Lesson4ContactsComponents .
                </p>
                <p>
                    В этом задании необходимо создать компонет Secret внутри директории
                    components/Lesson4ContactsComponents . с
                    содержимым  <code>{'<p>My email: contact@gmail.com</p>'}</code>
                </p>
                <p>
                    В этом задании необходимо создать компонет Secret внутри директории components с
                    содержимым  <code>{'<p>My Secret: {value}</p>'}</code>
                </p>
                <p>
                    Поле value компонент должен получать из текущего роута как результат работы
                    динамического поля.
                </p>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson4Pages />
    </ErrorBoundary>
);
