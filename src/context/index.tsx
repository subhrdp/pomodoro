import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import { StateType, initialState } from './initialState';
import useLocalStorage from '../hooks/useLocalStorage';

type SetStateType = React.Dispatch<React.SetStateAction<StateType>>;
type StateContextType = [StateType, SetStateType];
type ThemeContextType = [boolean, () => void];
type Props = { children: React.ReactNode };

const StateContext = React.createContext<StateContextType>(null!);
const ThemeContext = React.createContext<ThemeContextType>(null!);

export function useStateContext() {
  return useContext(StateContext);
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

function Context({ children }: Props) {
  const [state, setState] = useLocalStorage<StateType>('state', initialState);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StateContext.Provider value={[state, setState]}>
        <ThemeContext.Provider value={[darkMode, toggleDarkMode]}>
          {children}
        </ThemeContext.Provider>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default Context;
