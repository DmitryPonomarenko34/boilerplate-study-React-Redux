// Core
import styled from 'styled-components';

export const AccordionQuestion = styled.div`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &::after {
      content: '+';
      position: absolute;
      right: 30px;
    }

    &:focus {
      background: #000;
      &::after {
          content: '-';
      }
    }
`;

export const AccordionAnswer = styled.p`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
    display: inline-block;
`;

export const AccordionItem = styled.section<{selected?: boolean}>`
    margin-bottom: 10px;
    &:hover ${AccordionQuestion} {
      color: #000;
    }
`;
