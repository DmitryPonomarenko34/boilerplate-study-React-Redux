// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, StudentRegistrationComponents } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';


// Styles
import * as S from '../Main/styles';

//Tools
import { ROOT, LESSON1, KEYBOARD, LESSON2, LESSON3, LESSON4, ACCORDION, LESSON6, LESSON7 } from '../../routes/book';

const StudentRegistrationPages: FC = () => {
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
                <CurrentPageName pageName = 'Lesson 5-6:Student Registration' />
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
                <StudentRegistrationComponents />
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №5</h4>
                <p>
                    В этом задании нужно создать форму для регистрации студента. Для этого нужно создать
                    компонент StudentRegistration . Затем для этого компонента нужно добавить роутер
                    /registration
                </p>
                <p>
                    В этом задании нужно улучшить форму для регистрации студента. Для этого нужно
                    реализовать валидацию с помощью yup
                </p>
                <h4>Домашнее задание №6</h4>
                <p>
                    Компонент StudentRegistrations должен рендерить данные зарегистрированного пользователя.
                </p>
                <p>
                    Рендерить компонент Profile необходимо по адресу /student
                </p>
                <p>
                    Результат к домашнему заданию №6 смотрите на странице Lesson 6:Student Profile Redux
                </p>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistrationPages />
    </ErrorBoundary>
);
