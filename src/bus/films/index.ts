// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

//Slice
import { filmsActions } from './slice';

// Types
import { Films } from './types';

export const useFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films); // Add films to ./src/init/redux/index.ts

    const fetchFilms = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/films', {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                throw new Error('messages fetch failed');
            }

            const data: { results: Films } = await response.json();

            dispatch(filmsActions.setFilms(data.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFilms();
    }, []);

    return {
        films: films.results,
    };
};
