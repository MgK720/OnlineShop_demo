import React, { useState, useEffect } from 'react';
import CustomSnackbar from './CustomSnackbar'; 

const SnackbarManager = () => {
  const [snackbarData, setSnackbarData] = useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const handleEvent = (event, severity) => {
      const { message } = event.detail;
      setSnackbarData({ message, severity: severity });
      setOpen(true)

      setTimeout(() => {
        setOpen(false)
      }, 15000)
    };


    window.addEventListener('axiosError', (event) => handleEvent(event, "error"));
    window.addEventListener('successAlert', (event) => handleEvent(event, "success"));
    //here i can add another eventListeners for another severity etc...

    return () => {
      window.removeEventListener('axiosError', (event) => handleEvent(event, "error"));
      window.addEventListener('successAlert', (event) => handleEvent(event, "success"));
    };
  }, []);

  return (
    <div>
      {snackbarData && (
        <CustomSnackbar
          open={open}
          setOpen={setOpen}
          message={snackbarData.message}
          severity={snackbarData.severity}
        />
      )}
    </div>
  );
};

export default SnackbarManager;
