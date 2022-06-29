// Core
import React, { FC, ReactNode } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    children: ReactNode;
}

export const ColumnInfo: FC<PropTypes> = ({ children }) => {
    return (
        <S.ColumnInfo>
            <S.ColumnInfoTop withoutBefore></S.ColumnInfoTop>
            <S.ColumnInfoContent>
                {children}
            </S.ColumnInfoContent>
        </S.ColumnInfo>
    );
};
