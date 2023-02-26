import Container from './Popup.styles';
import PrimaryButton from '../PrimaryButton';
import Button from '../Button';

function Popup() {
  const params = new URLSearchParams(window.location.search);
  const title = `${params.get('complete')} complete!`;
  document.title = title;

  const resume = () => {
    localStorage.setItem('status', 'running');
    window.close();
  };

  return (
    <Container>
      <h1>{title}</h1>
      <h2>Pomodoros completed today — {params.get('today')}</h2>
      <div>
        <PrimaryButton onClick={resume}>
          Start {params.get('next')}
        </PrimaryButton>
        <Button onClick={() => window.close()}>Close</Button>
      </div>
    </Container>
  );
}

export default Popup;
