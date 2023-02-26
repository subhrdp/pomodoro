import { useState } from 'react';
import { createPortal } from 'react-dom';
import Container from './Header.styles';
import Button from '../Button';
import SwitchTheme from '../SwitchTheme';
import Settings from '../Settings';
import History from '../History';
import { ReactComponent as GitHubIcon } from 'assets/github.svg';

function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <>
      <Container>
        <Button onClick={() => setShowSettings(true)}>Settings</Button>
        <Button onClick={() => setShowHistory(true)}>History</Button>
        <SwitchTheme />
        <Button
          icon
          onClick={() =>
            window.open('https://github.com/subhrdp/pomodoro', '_blank')
          }
        >
          <GitHubIcon />
        </Button>
      </Container>
      {showSettings &&
        createPortal(
          <Settings close={() => setShowSettings(false)} />,
          document.body
        )}
      {showHistory &&
        createPortal(
          <History close={() => setShowHistory(false)} />,
          document.body
        )}
    </>
  );
}

export default Header;
