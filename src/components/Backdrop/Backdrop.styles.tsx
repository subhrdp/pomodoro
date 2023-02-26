import styled from 'styled-components';
import '@fontsource/inter/variable.css';

const Container = styled.div`
  position: fixed;
  font-family: 'InterVariable', sans-serif;
  font-size: 1.125rem;
  letter-spacing: -0.011em;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.backdrop};

  & > div {
    display: flex;
    width: 1280px;
    margin: 0 auto;
  }
`;

export default Container;
