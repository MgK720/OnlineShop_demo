import axios from 'axios';

const baseURL = 'http://localhost:3000';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
        //const { status, data } = error.response;
        const { data } = error.response;
        const errorMessage = data && data.error ? data.error : 'Internal Server Error';

        //alert(errorMessage) <-This works
        console.log("blablablalbllab");
        window.dispatchEvent(new CustomEvent('axiosError', { detail: { message: errorMessage } }));
    }else{
        window.dispatchEvent(new CustomEvent('axiosError', { detail: { message: "Server error - try again in a few minutes" } }));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
