import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 20px;
  
  &:first-child {
    margin-top: 0;    
  }
  
  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 20px;
  
    &:last-child {
      margin-right: 0;    
    }
  }
`;