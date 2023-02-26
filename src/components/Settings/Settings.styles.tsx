import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 6rem 2rem auto auto;
  padding: 0rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > span {
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    font-weight: 600;
    width: 100%;
    margin: 3rem 0 1rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.mutedText};
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 3rem 1rem 2rem 0;

    & > ${Button}:nth-child(1) {
      margin-right: 0.5rem;
    }
  }
`;

export default Container;
