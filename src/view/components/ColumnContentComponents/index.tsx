// Core
import React, { FC, ReactNode } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    children: ReactNode;
}

export const ColumnContent: FC<PropTypes> = ({ children }) => {
    return (
        <S.InnerItemWrapper>
            <S.InnerItemTop withoutBefore></S.InnerItemTop>
            <S.InnerItemContent>
                {children}
            </S.InnerItemContent>
        </S.InnerItemWrapper>
    );
};
