import { useState } from 'react';
import CartContainer from './components/CartContainer/CartContainer';
import SnackbarManager from './components/Snackbar/SnackbarManager';
import axios from "axios";
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './components/Theme/Theme';

axios.defaults.baseURL = `http://localhost:3000`

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = (newTheme) => {
    setThemeMode(newTheme);
  };

  return(
    <>
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline>
        <CartContainer toggleTheme={toggleTheme}/>
        <SnackbarManager/>
      </CssBaseline>
    </ThemeProvider>
    </>
  )
}

export default App
