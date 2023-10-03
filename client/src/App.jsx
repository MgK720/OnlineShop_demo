import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import NavBar from './components/NavBar/NavBar';
import MainSection from './components/MainSection/MainSection';

axios.defaults.baseURL = `http://localhost:3000`

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Tutaj useEffect za pierwszym renderem - sprawdzenie czy jestem zalogowany jak tak to setIsLoggedIn(true) - todo sprawdzic czy to dziala - za kazdym zalogowaniem zrob init wszystkich state'ów (???)
  return (
    <>
    <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    {isLoggedIn && <p>Hello!!!</p>}
    <MainSection isLoggedIn={isLoggedIn}/>
      {/* <Typography variant="h1">{data.message}</Typography> */}

    </>
  )
}

export default App


  // const [count, setCount] = useState(0)
  // const [data,setData] = useState({message: ""});

  // useEffect(() => {
  //   fetchMsgFromDB();
  // }, []);
  // const fetchMsgFromDB = async () => {
  //   const { data } = await axios.get("/getmsg")
  //   setData({message: [data.message]})
  // }