import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import { useStateContext } from 'context';
import Container from './History.styles';
import Backdrop from '../Backdrop';
import Button from '../Button';
import { ReactComponent as CloseIcon } from 'assets/close.svg';

type Props = {
  close: () => void;
};

function History({ close }: Props) {
  const [state, setState] = useStateContext();

  const clear = () => {
    setState((prev) => ({
      ...prev,
      history: [],
    }));
  };

  return (
    <Backdrop handleClose={close}>
      <Container>
        <Button onClick={close}>
          <CloseIcon />
        </Button>
        <div>
          <div>
            <span>Today</span>
            <span>
              {state.history.filter((pomodoro) => isToday(pomodoro)).length}
            </span>
          </div>
          <div>
            <span>This Week</span>
            <span>
              {
                state.history.filter((pomodoro) =>
                  isThisWeek(pomodoro, { weekStartsOn: 1 })
                ).length
              }
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>{state.history.length}</span>
          </div>
        </div>
        <Button onClick={clear}>Delete</Button>
      </Container>
    </Backdrop>
  );
}

export default History;
