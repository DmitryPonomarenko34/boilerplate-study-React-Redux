// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

// Bus
import { useFilms } from '../../../bus/films';

//styles
import * as S from './styles';

export const Lesson7FilmsComponents: FC = () => {
    const { filmIndex } = useParams();
    const { films } = useFilms();

    if (!films) {
        return <div>'Is loading...'</div>;
    }

    const film = films[ Number(filmIndex) ];

    const {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        planets,
    } = film;

    return (
        <S.Container>
            <ul>
                <li>
                    Title:
                    {title}
                </li>
                <li>
                    Episode Id:
                    {episode_id}
                </li>
                <li>
                    Opening Crawl:
                    {opening_crawl}
                </li>
                <li>
                    Director:
                    {director}
                </li>
                <li>
                    Producer:
                    {producer}
                </li>
                <li>
                    Release Date:
                    {release_date}
                </li>
                <li>
                    Planets:
                    {
                        planets.map((planet, index) => (
                            <a
                                href = { planet }
                                key = { index }>
                                {planet}
                            </a>
                        ))
                    }
                </li>
            </ul>
        </S.Container>
    );
};
