// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Slice
import { peopleActions } from './slice';

// Tools
import { useSelector } from '../../tools/hooks';

//Types
import { People } from './types';

export const usePeople = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people); // Add people to ./src/init/redux/index.ts

    const fetchPeople = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people', {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                throw new Error('messages fetch failed');
            }

            const data: {results: People} = await response.json();

            dispatch(peopleActions.setPeople(data.results));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return {
        people: people.results,
    };
};
