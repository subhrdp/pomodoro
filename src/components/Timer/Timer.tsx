import { useEffect } from 'react';
import Container from './Timer.styles';
import Label from '../Label';
import Numbers from '../Numbers';
import PrimaryButton from '../PrimaryButton';
import Button from '../Button';
import useTimer from 'hooks/useTimer';
import displayTime from 'utils/displayTime';

type Props = {
  label: string;
  onComplete: () => void;
  time: number;
};

function Timer({ label, onComplete, time }: Props) {
  const { toggle, reset, active, current } = useTimer(time, onComplete);

  if (active) {
    document.title = `${label} — ${displayTime(current)}`;
  } else {
    document.title = 'Pomodoro';
  }

  useEffect(() => {
    reset();
  }, [reset, label]);

  const onStorageChange = () => {
    const status = localStorage.getItem('status');
    if (status === 'running') {
      toggle();
    }
  };

  useEffect(() => {
    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  });

  return (
    <>
      <Label active={active}>{label}</Label>
      <Numbers active={active}>{displayTime(current)}</Numbers>
      <Container>
        <PrimaryButton onClick={toggle}>
          {active ? 'Pause' : 'Start'}
        </PrimaryButton>
        <Button onClick={reset}>Reset</Button>
      </Container>
    </>
  );
}

export default Timer;
