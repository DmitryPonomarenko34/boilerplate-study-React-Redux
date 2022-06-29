// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Lesson1 = lazy(() => import(/* webpackChunkName: "Lesson1Pages" */ './Lesson1Pages'));
export const Lesson2 = lazy(() => import(/* webpackChunkName: "Lesson2Pages" */ './Lesson2Pages'));
export const Lesson3 = lazy(() => import(/* webpackChunkName: "Lesson3Pages" */ './Lesson3Pages'));
export const Lesson4 = lazy(() => import(/* webpackChunkName: "Lesson4Pages" */ './Lesson4Pages'));
export const Lesson6 = lazy(() => import(/* webpackChunkName: "Lesson6Pages" */ './StudentProfilePages'));
export const Lesson7 = lazy(() => import(/* webpackChunkName: "Lesson7PeoplePages" */ './Lesson7PeoplePages'));
export const Lesson7Person = lazy(() => import(/* webpackChunkName: "Lesson7PersonPages" */ './Lesson7PersonPages'));
export const Lesson7Films = lazy(() => import(/* webpackChunkName: "Lesson7FilmsPages" */ './Lesson7FilmsPages'));
export const Keyboard = lazy(() => import(/* webpackChunkName: "KeyboardPages" */ './KeyboardPages'));
export const Accordion = lazy(() => import(/* webpackChunkName: "AccordionPages" */ './AccordionPages'));
export const StudentRegistration = lazy(() => import(/* webpackChunkName: "StudentRegistrationPages" */ './StudentRegistrationPages'));
