// Core
import React, { FC, ReactNode } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    children: ReactNode;
}

export const ColumnNavigation: FC<PropTypes> = ({ children }) => {
    return (
        <S.InnerItem>
            <S.InnerItemTop></S.InnerItemTop>
            <S.InnerItemContent>
                {children}
            </S.InnerItemContent>
        </S.InnerItem>
    );
};
