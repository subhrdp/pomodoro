import styled from 'styled-components';

interface Props {
  active: boolean;
}

const Numbers = styled.h1<Props>`
  font-feature-settings: 'tnum';
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: 0;
  color: ${({ theme, active }) => (active ? theme.text : theme.mutedText)};
  margin: 0 0 0.75rem 0;
  transition: color 0.25s ease-in-out;
`;

export default Numbers;
