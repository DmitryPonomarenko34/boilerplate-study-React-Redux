// Core
import styled from 'styled-components';

// Types
type booleanProps = {
    long?: boolean;
    small?: boolean;
    smallEnd?: boolean;
    backspace?: boolean;
}

export const Section = styled.section`
  padding: 50px 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const KeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(70, 1fr);
  grid-template-rows: repeat(5, 60px);
`;

export const KeyboardElem = styled.div<booleanProps>`
display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 17px;
  background-color: #ccc;
  color: #000;
  border: 4px solid #000;
  font-family: 'Roboto', sans-serif;
  grid-column: ${(props) => {
        if (props.long) {
            return 'span 42';
        } else if (props.small) {
            return 'span 8';
        } else if (props.smallEnd) {
            return 'span 6';
        } else if (props.backspace) {
            return 'span 12';
        }

        return 'span 7';
    }};

    &:hover {
      border-color: #fff;
    }
`;
