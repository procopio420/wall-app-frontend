import styled from 'styled-components';

export const Button = styled.button`
  background-color: #f50;
  border: 0;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0 0;
  color: #fff;
  font-weight: bold;

  & + & {
    margin-left: 15px
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: ${({height}) => height}px;
  width: ${({width}) => width}px;
  margin-top: -${({height}) => height/2}px;
  margin-left: -${({width}) => width/2}px;

  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  border-radius: 15px;
  border: 2px solid #f50;
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  img {
    width: 12px;
    heigth: 12px;
    filter: invert(43%) sepia(70%) saturate(3849%) hue-rotate(359deg) brightness(100%) contrast(108%);
  }

  & + & {
    margin-left: 5px;
  }
`;

export const Image = styled.img`
  width: 150px;
  heigth: 150px;
  filter: invert(43%) sepia(70%) saturate(3849%) hue-rotate(359deg) brightness(100%) contrast(108%);
`;

export const Title = styled.h1`
  color: #f50;
  font-family: sans-serif;
  font-size: 24px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;
  margin: 20px 0 0;
  color: #f50;
`;

export const Link = styled.a`
  color: #f50;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;
