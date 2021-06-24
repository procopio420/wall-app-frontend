import styled from 'styled-components'

export const Container = styled.header`
  background-color: #444;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    heigth: 100px;
    filter: invert(43%) sepia(70%) saturate(3849%) hue-rotate(359deg) brightness(100%) contrast(108%);
  }

  h1 {
    color: #f50;
    font-family: sans-serif;
    margin: 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  p {
    font-family: sans-serif;
    font-weight: bold;
    margin: 0;
    color: #f50;
  }

  img {
    margin-right: 5px;
    width: 25px;
    heigth: 25px;
    filter: invert(43%) sepia(70%) saturate(3849%) hue-rotate(359deg) brightness(100%) contrast(108%);
  }

  & + & {
    margin-left: 25px;
  }
`;

export const Profile = styled.p`
  color: #f50;
  font-family: sans-serif;
  font-weight: bold;
  margin: 0;
  margin-right: 10px;
`;