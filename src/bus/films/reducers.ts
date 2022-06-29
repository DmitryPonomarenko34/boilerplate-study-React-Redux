// Types
import * as types from './types';

export const setFilms: types.BaseContact<types.Films> = (state, action) => {
    return {
        ...state,
        results: action.payload,
    };
};
