import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  margin-bottom: 0.25rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
  }

  & > input[type='number'] {
    font-feature-settings: 'tnum';
    text-align: center;
    height: 2rem;
    width: 2.5rem;
    background-color: ${({ theme }) => theme.appBackground};
    color: inherit;
    margin-left: auto;
    border: 0;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.toggleSwitchBackground};

    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default Container;
