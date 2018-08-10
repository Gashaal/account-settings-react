import styled from 'styled-components';

export default styled.button`
  font-size: 18px;
  color: #333;
  opacity: 0.7;
  transition: opacity 0.15s ease-in-out;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
  
  &:last-child {
    margin-left: 20px;
  }
`;