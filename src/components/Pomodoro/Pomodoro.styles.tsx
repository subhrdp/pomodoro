import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  background-color: ${({ theme }) => theme.background};
  margin: 0 auto;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Container;
