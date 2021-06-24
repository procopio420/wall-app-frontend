import styled from 'styled-components'

export const Field = styled.input`
  border: 2px solid #f50;
  border-radius: 10px;
  padding: 15px;
  min-width: 400px;
  background-color: #444;
  color: #fff;

  &:focus {
    box-shadow: 0 0 15px #f50;
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const BigField = styled.textarea`
  border: 2px solid #f50;
  border-radius: 10px;
  padding: 15px;
  min-width: 400px;
  min-height: 100px;
  background-color: #444;
  color: #fff;
  margin-top: 5px;

  &:focus {
    box-shadow: 0 0 15px #f50;
    outline: none;
  }

  &::placeholder {
    font-family: sans-serif;
    color: #fff;
  }
`;

export const Error = styled.p`
  margin: 10px 0 0;
  text-align: left;
  color: #f50;
  font-family: sans-serif;
`;