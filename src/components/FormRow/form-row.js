import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  &:first-child {
    margin-top: 0;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;