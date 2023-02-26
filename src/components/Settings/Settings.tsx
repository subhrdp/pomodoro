import { useState } from 'react';
import { useStateContext } from 'context';
import Container from './Settings.styles';
import Backdrop from '../Backdrop';
import NumberInput from '../NumberInput';
import ToggleInput from '../ToggleInput';
import Button from '../Button';
import PrimaryButton from '../PrimaryButton';

type Props = {
  close: () => void;
};

function Settings({ close }: Props) {
  const [state, setState] = useStateContext();
  const [pomodoro, setPomodoro] = useState(state['Pomodoro']);
  const [shortBreak, setShortBreak] = useState(state['Short Break']);
  const [longBreak, setLongBreak] = useState(state['Long Break']);
  const [frequency, setFrequency] = useState(state.frequency);
  const [push, setPush] = useState(state.push);
  const [popup, setPopup] = useState(state.popup);
  const [sound, setSound] = useState(state.sound);

  const submit = () => {
    setState((prev) => ({
      ...prev,
      Pomodoro: pomodoro,
      'Short Break': shortBreak,
      'Long Break': longBreak,
      longBreakFrequency: frequency,
      push,
      popup,
      sound,
    }));
    close();
  };

  return (
    <Backdrop handleClose={close}>
      <Container>
        <span>Time (minutes)</span>
        <NumberInput
          label='Pomodoro'
          value={pomodoro}
          onChange={(value) => setPomodoro(value)}
        />
        <NumberInput
          label='Short Break'
          value={shortBreak}
          onChange={(value) => setShortBreak(value)}
        />
        <NumberInput
          label='Long Break'
          value={longBreak}
          onChange={(value) => setLongBreak(value)}
        />
        <span>Long Break</span>
        <NumberInput
          label='After (pomodoros)'
          value={frequency}
          onChange={(value) => setFrequency(value)}
          max={10}
        />
        <span>Notifications</span>
        <ToggleInput
          label='Desktop Notification'
          checked={push}
          onChange={() => setPush((current) => !current)}
        />
        <ToggleInput
          label='Pop-up Window'
          checked={popup}
          onChange={() => setPopup((current) => !current)}
        />
        <ToggleInput
          label='Completion Sound'
          checked={sound}
          onChange={() => setSound((current) => !current)}
        />
        <div>
          <Button onClick={close}>Cancel</Button>
          <PrimaryButton onClick={submit}>Confirm</PrimaryButton>
        </div>
      </Container>
    </Backdrop>
  );
}

export default Settings;
