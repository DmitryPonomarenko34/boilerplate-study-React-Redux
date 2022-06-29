// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element={<Pages.Main />}
                path={book.ROOT}
            />
            <Route
                element={<Pages.Lesson1 />}
                path={book.LESSON1}
            />
            <Route
                element={<Pages.Lesson2 />}
                path={book.LESSON2}
            />
            <Route
                element={<Pages.Lesson3 />}
                path={book.LESSON3}
            />
            <Route
                element={<Pages.Lesson4 />}
                path={book.LESSON4}
            />
            <Route
                element={<Pages.Lesson4 />}
                path={book.SECRET}
            />
            <Route
                element={<Pages.Lesson6 />}
                path={book.LESSON6}
            />
            <Route
                element={<Pages.Lesson7 />}
                path={book.LESSON7}
            />
            <Route
                element={<Pages.Lesson7Person />}
                path={book.LESSON7ID}
            />
            <Route
                element={<Pages.Lesson7Films />}
                path={book.LESSON7IDFILMS}
            />
            <Route
                element={<Pages.Keyboard />}
                path={book.KEYBOARD}
            />
            <Route
                element={<Pages.Accordion />}
                path={book.ACCORDION}
            />
            <Route
                element={<Pages.StudentRegistration />}
                path={book.STUDENTREGISTRATION}
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
