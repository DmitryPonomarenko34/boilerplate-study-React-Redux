// Core
import React, { FC, useEffect, useState  } from 'react';
import styled from 'styled-components';

// Components
import { ErrorBoundary, ColumnNavigation, ColumnContent, ColumnInfo, User } from '../../components';

//Element
import { CurrentPageName, NavigateBtn } from '../../elements';

// Styles
import * as S from '../Main/styles';

export const DefText = styled.p`
    font-family: Roboto, sans-serif;
    color: #fff;
`;

//Books
import { ROOT, ACCORDION, KEYBOARD, LESSON2, LESSON1, LESSON4, STUDENTREGISTRATION, LESSON6, LESSON7 } from '../../routes/book';

const Lesson3Pages: FC = () => {
    const [ db, setDb ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isClientError, setisClientError ] = useState(false);
    const [ isServerError, setIsServerError ] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const date = await response.json();

            setDb(date);

            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        })();

        (async () => {
            const response3 = await fetch('://jsonplaceholder.typicode.com/use12121212rs');
            const date3 = await response3.json();
            setDb(date3);

            if (response3.status <= 299 && response3.status >= 200) {
                return setIsServerError(true);
            }

            return setIsServerError(false);
        })();

        (async () => {
            try {
                const response2 = await fetch('://jsonplaceholder.typicode.com/use12121212rs');
                const date2 = await response2.json();
                setDb(date2);
            } catch (error) {
                return setisClientError(false);
            }
        })();
    }, []);

    const users = db.map(({ name, username, email, id }) => {
        return (
            <User
                email = { email }
                key = { id }
                name = { name }
                username = { username }
            />
        );
    });

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
                <CurrentPageName pageName = 'Lesson 3' />
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
                <h4>Part 1:</h4>
                {isLoading ? (
                    <DefText>Загрузка данных ...</DefText>
                )
                    : users
                }
                <h4>Part 2:</h4>
                {isServerError ? users : <DefText>Сервер не отвечает</DefText>}
                <h4>Part 3:</h4>
                {isClientError ? users : <DefText>Неправильный запрос</DefText>}
            </ColumnContent>
            <ColumnInfo>
                <h4>Домашнее задание №3</h4>
                <p>
                    В этом задании нужно улучшить приложение созданное преподавателем на уроке. Для
                    этого нужно добавить лоадер который будет отображаться во время загрузки пользователей из
                    jsonplaceholder API .
                </p>
            </ColumnInfo>
        </S.Inner>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson3Pages />
    </ErrorBoundary>
);
