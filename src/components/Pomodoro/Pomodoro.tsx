import { useState } from 'react';
import isToday from 'date-fns/isToday';
import Container from './Pomodoro.styles';
import { useStateContext } from 'context';
import Header from '../Header';
import Timer from '../Timer';
import notifications from 'utils/notifications';

type CycleType = {
  label: 'Pomodoro' | 'Short Break' | 'Long Break';
  completed: number;
};

const defaultCycle: CycleType = { label: 'Pomodoro', completed: 1 };

function Pomodoro() {
  const [state, setState] = useStateContext();
  const [cycle, setCycle] = useState<CycleType>(defaultCycle);

  const sendNotification = (complete: string, next: string) => {
    const pomodoros = state.history.filter((pomodoro) =>
      isToday(pomodoro)
    ).length;

    notifications({
      push: state.push,
      popup: state.popup,
      sound: state.sound,
      complete,
      next,
      today: complete === 'Pomodoro' ? pomodoros + 1 : pomodoros,
    });
  };

  const onComplete = () => {
    if (cycle.label === 'Pomodoro') {
      if (cycle.completed === state.frequency) {
        sendNotification('Pomodoro', 'Long Break');
        setCycle({
          label: 'Long Break',
          completed: 1,
        });
      } else {
        sendNotification('Pomodoro', 'Short Break');
        setCycle((prev) => {
          return {
            label: 'Short Break',
            completed: prev.completed + 1,
          };
        });
      }
      setState((prev) => ({
        ...prev,
        history: [...prev.history, Date.now()],
      }));
    } else {
      sendNotification(
        cycle.label === 'Short Break' ? 'Short break' : 'Long break',
        'Pomodoro'
      );
      setCycle((prev) => {
        return {
          label: 'Pomodoro',
          completed: prev.completed,
        };
      });
    }
  };

  const time = state[cycle.label] * 60000;

  return (
    <Container id='pomodoro'>
      <Header />
      <Timer label={cycle.label} onComplete={onComplete} time={time} />
    </Container>
  );
}

export default Pomodoro;
