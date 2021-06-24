import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ccc;
  min-height: 100vh;
`;

export const PostList = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const CreatePostButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  background-color: #f50;
  color: #fff;
  font-weight: bolder;
  border: 0;
  height: 75px;
  width: 75px;
  cursor: pointer;
  font-size: 32px;
`;
