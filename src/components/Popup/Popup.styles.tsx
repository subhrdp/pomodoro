import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 8rem auto auto;
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.022em;
    margin: 0 0 0.5rem;
  }

  & > h2 {
    font-size: 1.25rem;
    font-weight: 500;
    text-align: right;
    margin: 0 0 2.5rem auto;
    color: ${({ theme }) => theme.mutedText};
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & > ${Button}:nth-child(1) {
      margin-right: 0.5rem;
    }
  }
`;

export default Container;
