import styled from 'styled-components';

interface Props {
  icon?: boolean;
}

const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  letter-spacing: -0.011em;
  height: 2.5rem;
  width: ${({ icon }) => (icon ? '2.75rem' : 'auto')};
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  padding: ${({ icon }) => (icon ? '0' : '0 1.5rem')};
  border: 0;
  border-radius: ${({ icon }) => (icon ? '50%' : '2.5rem')};
  transition: background-color 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }

  & > svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: ${({ icon }) => (icon ? '0' : '0.5rem')};
  }
`;

export default Button;
