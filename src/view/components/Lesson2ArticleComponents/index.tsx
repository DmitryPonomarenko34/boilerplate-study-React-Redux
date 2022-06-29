// Core
import React, { FC } from 'react';

// Elements
import { CommentsCount, LikesCounter, Tag } from '../../elements';

// Style
import * as S from './styles';

// Types
type PropTypes = {
    title: string;
    description: string;
    published: string;
    likes: number;
    comments: number;
    image: string;
    tags: Array<string>;
}

export const ArticleItemUpgrade: FC<PropTypes> = ({ title, description, published, likes, comments, image, tags }) => {
    return (
        <S.Article>
            <header>
                <S.Poster>
                    <img
                        alt = ''
                        src = { image }
                    />
                </S.Poster>
                <S.Tags>
                    <div>
                        <Tag tags = { tags[ 0 ] }/>
                    </div>
                    <div>
                        <Tag tags = { tags[ 1 ] } />
                    </div>
                </S.Tags>
            </header>
            <article>
                <h1>{title}</h1>
                <p>{description} </p>
            </article>
            <footer>
                <span>{published}</span>
                <S.Controls>
                    <CommentsCount
                        comments = { comments }
                    />
                    <LikesCounter
                        likes = { likes }
                    />
                </S.Controls>
            </footer>
        </S.Article>
    );
};
