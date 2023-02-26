import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  margin-bottom: auto;

  & > ${Button} {
    width: 7.5rem;

    &:nth-child(1) {
      margin-right: 0.5rem;
    }
  }
`;

export default Container;
