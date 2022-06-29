// Core
import styled from 'styled-components';

// Types
type PropTypes = {
    withoutBefore?: boolean;
}

export const ColumnInfo = styled.div<PropTypes>`
   background: #2C2F48;
`;

export const ColumnInfoTop = styled.div<PropTypes>`
    padding: 20px 0;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background: ${(props) => !props.withoutBefore ? 'rgba(255, 255, 255, 0.1)' : ''};
    }
`;

export const ColumnInfoContent = styled.div`
     padding: 0 16px;
     padding-top: 20px;
    h4, p, ul, code {
        color: #fff;
        margin-bottom: 15px;
        font-family: Roboto, sans-serif;
        li {
            margin-bottom: 5px;
        }
    }

    h4 {
        font-weight: 700;
    }

     ul {
        padding-left: 16px;
        list-style: disc;
     }
`;
