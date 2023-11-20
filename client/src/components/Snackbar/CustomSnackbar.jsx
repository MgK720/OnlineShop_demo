import * as React from 'react';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomSnackbar ({ open, setOpen, message, severity }) {
  const hideDuration = 6000

  const onClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={hideDuration} onClose={onClose}>
      <MuiAlert elevation={6} variant="filled" severity={severity} onClose={onClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

