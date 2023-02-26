import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  & > ${Button}:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default Container;
