// Core
import styled from 'styled-components';

export const Article = styled.article`
  width: 33.333%;
  height: auto;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px 0 rgba(0,0,0,0.5);
  background-color: #fff;

  header {
    position: relative;
    max-height: 280px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

     img {
        height: 100%;
     }

     & .buttons {
      position: relative;
      top: 160px;
      left: 30px;

      & .button{
        display: inline-block;
        margin-right: 10px;
      }
    }
  }

  article {
    padding: 35px 34px 15px;

    h1 {
      margin-top: 0;
      margin-bottom: 15px;
      font-family: Helvetica;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      font-family: Helvetica;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.6);
      margin: 0;
    }
  }
    
     footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-color: lightgray;
      border-top-width: 1px;
      border-top-style: solid;
      padding: 16px 34px 10px;
      font-family: Helvetica;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
    }

  &:last-child {
    margin-right: 0;
  }
`;

export const Poster = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
    }
`;

export const Tags = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 35px;

    div {
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
`;

export const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 136px;
`;
