import { useEffect, useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

axios.defaults.baseURL = `http://localhost:3000`

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState({message: ""});

  useEffect(() => {
    fetchMsgFromDB();
  }, []);
  const fetchMsgFromDB = async () => {
    const { data } = await axios.get("/getmsg")
    setData({message: [data.message]})
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{data.message}</p>
    </>
  )
}

export default App
