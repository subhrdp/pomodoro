import styled from 'styled-components';
import '@fontsource/inter/variable.css';

const Container = styled.div`
  display: flex;
  font-family: 'InterVariable', sans-serif;
  font-size: 1.125rem;
  letter-spacing: -0.011em;
  height: 100vh;
  background-color: ${({ theme }) => theme.appBackground};
`;

export default Container;
