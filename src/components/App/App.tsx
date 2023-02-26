import Container from './App.styles';
import Popup from '../Popup';
import Pomodoro from '../Pomodoro';

function App() {
  const params = new URLSearchParams(window.location.search);

  return (
    <Container>
      {params.has('notification') ? <Popup /> : <Pomodoro />}
    </Container>
  );
}

export default App;
