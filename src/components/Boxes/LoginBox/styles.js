import styled from 'styled-components'

export const Field = styled.input`
  border: 2px solid #f50;
  border-radius: 10px;
  background-color: #444;
  padding: 15px;
  min-width: 200px;
  color: #fff;
  margin-top: 10px;

  &:focus {
    box-shadow: 0 0 15px #f50;
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const Error = styled.p`
  margin: 0;
  margin-top: 5px;
  text-align: center;
  color: #f50;
  font-family: sans-serif;
`;