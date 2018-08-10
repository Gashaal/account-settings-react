import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;    
  }
`;