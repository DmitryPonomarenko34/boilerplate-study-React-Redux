// Core
import React, { FC } from 'react';

// Bus
import { usePeople } from '../../../bus/people';
import { useFilms } from '../../../bus/films';

// Element
import { NavigateBtn } from '../../elements';

// Styles
import * as S from './styles';

export const Lesson7PeopleComponents: FC = () => {
    const { people } = usePeople();
    const { films } = useFilms();

    if (!people || !films) {
        return <div>'Is loading...'</div>;
    }

    return (
        <S.Container>
            {
                people.map((people, index) => {
                    return (
                        <NavigateBtn
                            key = { index }
                            lessonName = { `Персонаж: ${people.name}` }
                            rootBookName = { `/people/id/${index} ` }
                        />
                    );
                })
            }

            {
                films.map((film, index) => {
                    return (
                        <NavigateBtn
                            key = { index }
                            lessonName = { `Фильм: ${film.title}` }
                            rootBookName = { `/films/id/${index} ` }
                        />
                    );
                })
            }
        </S.Container>
    );
};
