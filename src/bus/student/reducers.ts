// Types
import * as types from './types';

export const updateStudent: types.BaseContact<types.Student> = (__, action) => {
    return action.payload;
};
