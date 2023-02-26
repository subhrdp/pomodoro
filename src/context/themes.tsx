import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    appBackground: string;
    background: string;
    backdrop: string;
    text: string;
    mutedText: string;
    buttonText: string;
    buttonBackground: string;
    buttonHoverBackground: string;
    primaryButtonText: string;
    primaryButtonBackground: string;
    primaryButtonHoverBackground: string;
    toggleSwitch: string;
    toggleSwitchBackground: string;
    boxShadow: string;
  }
}

export const lightTheme: DefaultTheme = {
  appBackground: '#EDEDED',
  background: '#fff',
  backdrop: '#0000004d',
  text: '#4F4F4F',
  mutedText: '#8D8D8D',
  buttonText: '#6A6A6A',
  buttonBackground: '#E5E5E5',
  buttonHoverBackground: '#DCDCDC',
  primaryButtonText: '#EBEFFC',
  primaryButtonBackground: '#4169E1',
  primaryButtonHoverBackground: '#3A5ECA',
  toggleSwitch: '#fff',
  toggleSwitchBackground: '#CACACA',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
};

export const darkTheme: DefaultTheme = {
  appBackground: '#121212',
  background: '#1A1A1A',
  backdrop: '#00000080',
  text: '#B0B0B0',
  mutedText: '#6A6A6A',
  buttonText: '#A7A7A7',
  buttonBackground: '#2C2C2C',
  buttonHoverBackground: '#353535',
  primaryButtonText: '#EBEFFC',
  primaryButtonBackground: '#4169E1',
  primaryButtonHoverBackground: '#5579E4',
  toggleSwitch: '#fff',
  toggleSwitchBackground: '#3E3E3E',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.3)',
};
