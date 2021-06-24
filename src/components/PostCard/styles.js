import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  border: 2px solid #f50;
  border-radius: 10px;
  padding: 15px 30px;
  width: 50%;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;

  div {
    width: 100%;
    display: inline-block;
  }

  & + & {
    margin-top: 16px;
  }

  div.row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-family: sans-serif;
      margin: 0;
      color: #444;
      font-size: 12px;
    }
  }

  &:hover {
    box-shadow: 0 6px 18px 3px #f50;
    transform: scale(1.025);
  }

  h2 {
    font-family: sans-serif;
    font-size: 24px;
    color: #f50;
    cursor: default;
    margin: 0;
    word-wrap: break-word;
    min-width: 70%;
  }

  p {
    font-family: sans-serif;
    font-size: 16px;
    color: #444;
    margin: 10px 0;
    cursor: default;
    word-wrap: break-word;
  }

  strong {
    font-family: sans-serif;
    font-size: 14px;
    color: #f50;
    margin: 0;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 12px;
    heigth: 12px;
    filter: invert(43%) sepia(70%) saturate(3849%) hue-rotate(359deg) brightness(100%) contrast(108%);
  }

  & + & {
    margin-left: 5px;
  }
`;