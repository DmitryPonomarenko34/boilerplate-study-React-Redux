// Types
import * as types from './types';

export const setPeople: types.BaseContact<types.People> = (state, action) => {
    return {
        ...state,
        results: action.payload,
    };
};
