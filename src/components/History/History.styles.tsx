import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  margin: 6rem 2rem auto auto;
  padding: 3rem 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  & > div {
    display: flex;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 8rem;

      & > span:nth-child(1) {
        font-size: 1.125rem;
        font-weight: 600;
        color: ${({ theme }) => theme.mutedText};
      }

      & > span:nth-child(2) {
        font-size: 2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.text};
        margin-top: 0.25rem;
      }
    }
  }

  & > ${Button}:nth-child(1) {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    height: 1.75rem;
    width: 1.75rem;
    background-color: inherit;
    color: ${({ theme }) => theme.mutedText};
    padding: 0;
    border: 0;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.buttonBackground};
      color: ${({ theme }) => theme.buttonText};
    }

    & > svg {
      height: 1.125rem;
      width: 1.125rem;
      margin: auto;
    }
  }

  & > ${Button}:nth-child(3) {
    margin: 1.5rem 2rem 0 auto;
  }
`;

export default Container;
