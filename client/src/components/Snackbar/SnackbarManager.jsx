import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CustomSnackbar from './CustomSnackbar'; 

const SnackbarManager = () => {
  const [snackbarData, setSnackbarData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEvent = (event, severity) => {
      const { message } = event.detail;
      setSnackbarData({ id: uuidv4(), message, severity });
      setOpen(true)
    };

    window.addEventListener('axiosError', (event) => handleEvent(event, "error"));
    window.addEventListener('successAlert', (event) => handleEvent(event, "success"));
    window.addEventListener('warningAlert', (event) => handleEvent(event, "warning"));
    //here i can add another eventListeners for another severity etc...


    return () => {
      window.removeEventListener('axiosError', (event) => handleEvent(event, "error"));
      window.addEventListener('successAlert', (event) => handleEvent(event, "success"));
      window.addEventListener('warningAlert', (event) => handleEvent(event, "warning"));;
    };
  }, [snackbarData]);

  return (
    <div>
      {snackbarData && (
        <CustomSnackbar
          key={snackbarData.id}
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
