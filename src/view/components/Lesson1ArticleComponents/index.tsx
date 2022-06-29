// Core
import React from 'react';

// Elements
import { CommentsCount, LikesCounter, Tag } from '../../elements';

// Style
import * as S from './styles';

export const ArticleItemFirst = () => {
    return (
        <S.Article>
            <header>
                <S.Poster>
                    <img
                        alt = ''
                        src = 'https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png'
                    />
                </S.Poster>
                <S.Tags>
                    <div>
                        <Tag tags = 'Literature'/>
                    </div>
                    <div>
                        <Tag tags = 'Books' />
                    </div>
                </S.Tags>
            </header>
            <article>
                <h1>
                    American writer of bad cowboy stories arrived in
                </h1>
                <p>
                    Volunteering to help people in need combined with travelling to faraway places is a new
                </p>
            </article>
            <footer>
                <span>15.07.2017</span>
                <S.Controls>
                    <CommentsCount
                        comments = { 10 }
                    />
                    <LikesCounter
                        likes = { 313 }
                    />
                </S.Controls>
            </footer>
        </S.Article>
    );
};
