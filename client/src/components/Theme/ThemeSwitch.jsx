import React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';

const ThemeSwitch = ({ onChange }) => {
  const theme = useTheme();

  const handleChange = () => {
    onChange && onChange(theme.palette.mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={theme.palette.mode === 'dark'}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'toggle dark/light' }}
    />
  );
};

export default ThemeSwitch;
