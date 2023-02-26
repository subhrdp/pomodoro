import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useThemeContext } from 'context';
import Container from './SwitchTheme.styles';
import Button from '../Button';
import { ReactComponent as Sun } from 'assets/sun.svg';
import { ReactComponent as Moon } from 'assets/moon.svg';

function SwitchTheme() {
  const [switching, setSwitching] = useState(false);
  const [darkMode, toggleDarkMode] = useThemeContext();

  const handleChange = () => {
    setSwitching(true);
    toggleDarkMode();
    setTimeout(() => {
      setSwitching(false);
    }, 250);
  };

  return switching ? (
    createPortal(<Container />, document.body)
  ) : (
    <Button icon onClick={handleChange}>
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
}

export default SwitchTheme;
