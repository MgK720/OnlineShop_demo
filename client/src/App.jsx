import CartContainer from './components/CartContainer/CartContainer';
import axios from "axios";
import './App.css'

axios.defaults.baseURL = `http://localhost:3000`

function App() {
  return(
    <>
      <CartContainer/>
    </>
  )
}

export default App
