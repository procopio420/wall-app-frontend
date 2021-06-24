import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & + & {
    margin-top: 10px
  }
`;

export const Field = styled.input`
  border: 2px solid #f50;
  border-radius: 10px;
  padding: 15px;
  min-width: 200px;
  background-color: #444;
  color: #fff;

  & + & {
    margin-left: 5px
  }

  &:focus {
    box-shadow: 0 0 15px #f50;
    outline: none;
  }

  &::placeholder {
    color: #fff;
  }
`;
