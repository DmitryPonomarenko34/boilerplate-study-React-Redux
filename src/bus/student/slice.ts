// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const optionInitialValues = [ 'designer', 'developer', 'writer' ];

export const initialState: types.Student = {
    name:       '',
    surname:    '',
    age:        '',
    email:      '',
    sex:        '',
    speciality: optionInitialValues[ 0 ],
};


export const studentSlice = createSlice<types.StudentState, typeof reducers>({
    name: 'student',
    initialState,
    reducers,
});

export const sliceName = studentSlice.name;
export const studentActions = studentSlice.actions;
export default studentSlice.reducer;
