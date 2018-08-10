import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: normal;
`;

const CloseButton = styled.span`
  font-size: 26px;
  cursor: pointer;
  opacity: 0.5;
  user-select: none;
  transition: opacity 0.15s ease-in-out;
  
  &:hover {
    opacity: 1;
  }
`;

export default () => (
  <Wrapper>
    <Title>Account settings</Title>
    <CloseButton>&times;</CloseButton>
  </Wrapper>
)

