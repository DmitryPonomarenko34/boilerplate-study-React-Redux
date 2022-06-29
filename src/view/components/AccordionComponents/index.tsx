// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    question: string;
    answer: string;
    onClick: Function;
    isSelected: boolean;
}

export const AccordionItem: FC<PropTypes> = ({ question, answer, onClick, isSelected }) => {
    return (
        <S.AccordionItem
            onClick = { () => void onClick() }>
            <S.AccordionQuestion>
                <span>{question}</span>
            </S.AccordionQuestion>
            {
                isSelected && (
                    <S.AccordionAnswer>{answer}</S.AccordionAnswer>
                )
            }
        </S.AccordionItem>
    );
};
