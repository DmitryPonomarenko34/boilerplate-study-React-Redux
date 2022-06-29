// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Styles
import * as S from '../Main/styles';

//Tools
import { ROOT, LESSON1, KEYBOARD, LESSON2, LESSON3, LESSON4, ACCORDION, STUDENTREGISTRATION, LESSON7 } from '../../routes/book';
import { useStudent } from '../../../bus/student';


const StudentRegistrationPages: FC = () => {
    const { student } = useStudent();

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
                <CurrentPageName pageName = 'Lesson 6:Student Profile Redux' />

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
                <S.Title>Profile</S.Title>
                <ul>
                    <li>Name: {student?.name}</li>
                    <li>SurName: {student?.surname}</li>
                    <li>Age: {student?.age}</li>
                    <li>Email: {student?.email}</li>
                    <li>Sex: {student?.sex}</li>
                    <li>Speciality: {student?.speciality}</li>
                </ul>
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №6</h4>
                <p>
                    Домашнее задание No1
                    В этом задании нужно подключить к React приложению Redux .
                    Затем необходимо добавить сохранение данных с формы регистрации в Redux
                </p>
                <p>
                    Для этой задачи необходимо создать кастомный хук useStudent .
                    Хук useStudent должен уметь сохранять профиль студента в Redux , а также читать
                    пользователя из Redux
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
