// Core
import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  span {
    display: block;
    width: 100%;
    margin-top: 5px;
    color: red;
    font-family: 'Roboto',sans-serif;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;

  input {
    display: block;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 35px;
    font-size: 18px;
  }

  span {
    display: block;
    margin-top: 5px;
    color: red;
  }
`;

export const FormLabelFlex = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
  input {
    width: 15px;
    height: 15px;
  }
`;

export const Select = styled.div`
  select {
    width: 200px;
    height: 40px;
  }
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  padding: 10px 20px !important;
  opacity: ${(props) => props.disabled ? '0.5' : '1'};
  cursor: ${(props) => props.disabled ? 'default !important' : 'pointer'};
  background-color: #fff !important;
  color: #000 !important;
  text-align: center !important;
  width: 200px !important;
`;
