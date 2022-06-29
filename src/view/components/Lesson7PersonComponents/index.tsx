// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

// Bus
import { usePeople } from '../../../bus/people';

export const Lesson7PersonComponents: FC = () => {
    const { manIndex } = useParams<{ manIndex: string}>();
    const { people } = usePeople();

    if (!people) {
        return <div>Loading...</div>;
    }

    const {
        birth_year,
        created,
        edited,
        eye_color,
        films,
        gender,
        hair_color,
        height,
        homeworld,
        mass,
        skin_color,
        species,
        starships,
        url,
        vehicles,
    } = people[ Number(manIndex) ];

    return (
        <ul>
            <li>
                Birth year:
                {birth_year}
            </li>
            <li>
                created:
                {created}
            </li>
            <li>
                edited:
                {edited}
            </li>
            <li>
                eye_color:
                {eye_color}
            </li>
            <li>
                films:
                {
                    films.map((filmElem, index) => (
                        <a
                            href = { filmElem }
                            key = { index }>
                            {filmElem}
                        </a>
                    ))
                }
            </li>
            <li>
                Gender:
                {gender}
            </li>
            <li>
                Hair Color:
                {hair_color}
            </li>
            <li>
                HomeWorld:
                <a href = { homeworld }>
                    {homeworld}
                </a>
            </li>
            <li>
                Mass:
                {mass}
            </li>
            <li>
                Skin Color:
                {skin_color}
            </li>
            <li>
                Species:
                {species}
            </li>
            <li>
                Starships:
                {
                    starships.map((starshipElem, index) => (
                        <a
                            href = { starshipElem }
                            key = { index }>
                            {starshipElem}
                        </a>
                    ))
                }
            </li>
            <li>
                Url:
                <a href = { url }>
                    {url}
                </a>
            </li>
            <li>
                Vehicles:
                {
                    vehicles.map((vehicleElem, index) => (
                        <a
                            href = { vehicleElem }
                            key = { index }>
                            {vehicleElem}
                        </a>
                    ))
                }
            </li>
            <li>
                Height:
                {height}
            </li>
        </ul>
    );
};
