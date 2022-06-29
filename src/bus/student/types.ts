// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Student = {
    name: string;
    surname: string;
    age: string;
    email: string;
    sex: string;
    speciality: string,
}
export type StudentState = Student | null;

// Contracts
export type BaseContact<T = any> = CaseReducer<StudentState, PayloadAction<T>>
