import styled from 'styled-components';

interface Props {
  checked: boolean;
}

const Container = styled.label<Props>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.25rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
  }

  & > input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  & > div {
    position: relative;
    height: 1.5rem;
    width: 2.5rem;
    margin-left: auto;

    & > span {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 1.5rem;
      transition: 0.25s;
      background-color: ${({ theme, checked }) =>
        checked ? theme.primaryButtonBackground : theme.toggleSwitchBackground};

      &:before {
        position: absolute;
        content: '';
        height: 1.125rem;
        width: 1.125rem;
        top: 3px;
        left: 3px;
        background-color: ${({ theme }) => theme.toggleSwitch};
        border-radius: 50%;
        transition: 0.25s;
        transform: ${({ checked }) =>
          checked ? 'translateX(1rem)' : 'translateX(0px)'};
      }
    }
  }
`;

export default Container;
