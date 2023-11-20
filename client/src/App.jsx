import CartContainer from './components/CartContainer/CartContainer';
import SnackbarManager from './components/Snackbar/SnackbarManager';
import axios from "axios";
import './App.css'

axios.defaults.baseURL = `http://localhost:3000`

function App() {
  return(
    <>
        <CartContainer/>
        <SnackbarManager/>
    </>
  )
}

export default App
