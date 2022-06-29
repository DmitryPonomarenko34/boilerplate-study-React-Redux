// Core
import styled from 'styled-components';

// Types
type PropTypes = {
    withoutBefore?: boolean;
}

export const InnerItem = styled.div`
    background: rgba(44, 47, 72, 0.5);
`;

export const InnerItemTop = styled.div<PropTypes>`
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

export const InnerItemContent = styled.div`
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
