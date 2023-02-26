import styled from 'styled-components';

interface Props {
  active: boolean;
}

const Label = styled.h2<Props>`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.022em;
  color: ${({ theme, active }) => (active ? theme.text : theme.mutedText)};
  margin: auto 0 0;
  transition: color 0.25s ease-in-out;
`;

export default Label;
