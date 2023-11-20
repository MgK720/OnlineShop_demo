import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomSnackbar ({ open, setOpen, message, severity }) {
  const onClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} onClose={onClose}>
      <MuiAlert elevation={6} variant="filled" severity={severity} onClose={onClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

