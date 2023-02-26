import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryButtonBackground};
  color: ${({ theme }) => theme.primaryButtonText};

  &:hover {
    background-color: ${({ theme }) => theme.primaryButtonHoverBackground};
  }
`;

export default PrimaryButton;
