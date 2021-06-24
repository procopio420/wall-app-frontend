import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #444;
    margin: 0 0 10px;
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
  }

  img {
    width: 125px;
    height: 125px;
    filter: invert(26%) sepia(2%) saturate(2%) hue-rotate(6deg) brightness(93%) contrast(89%);
  }
`;

export const Link = styled.a`
  color: #f50;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;
