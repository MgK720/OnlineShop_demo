import React, { useState, useEffect } from 'react';
import CustomSnackbar from './CustomSnackbar'; 

const SnackbarManager = () => {
  const [snackbarData, setSnackbarData] = useState(null);

  useEffect(() => {
    const handleAxiosError = (event) => {
      const { message } = event.detail;
      setSnackbarData({ message, severity: 'error' });

      setTimeout(() => {
        setSnackbarData(null);
      }, 12000);
    };

    window.addEventListener('axiosError', handleAxiosError);
    //here i can add another eventListeners for another severity etc...

    return () => {
      window.removeEventListener('axiosError', handleAxiosError);
    };
  }, []);

  return (
    <div>
      {snackbarData && (
        <CustomSnackbar
          open={true}
          onClose={() => setSnackbarData(null)}
          message={snackbarData.message}
          severity={snackbarData.severity}
        />
      )}
    </div>
  );
};

export default SnackbarManager;
