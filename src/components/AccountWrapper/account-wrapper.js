import styled from 'styled-components';

export default styled.div`
  width: 240px;
  margin: 100px auto;
  background: #FCEC52;
  padding: 30px;
  position: relative;
  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);
  
  @media (min-width: 768px) {
    width: 380px;
    padding: 60px 60px 30px;
  }
`;
