import NavBar from '../NavBar/NavBar';
//import axios from "axios";
import axios from '../../axiosConfig';
import MainSection from '../MainSection/MainSection';
import { useEffect, useState } from 'react'

export default function CartContainer({toggleTheme}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        console.log(`my login status: ${isLoggedIn}`);
    }, [isLoggedIn])

    // const [token, setToken] = useState((localStorage.getItem('token')))
    // useEffect(()=>{
    //     setIsLoggedIn(token ? true : false)
    // }, [token])

    const [user, setUser] = useState({});
    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = localStorage.getItem('token');
                try{
                    const {data} = await axios.get(`/auth/isloggedin`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    if(data.status === true){
                        window.dispatchEvent(new CustomEvent('successAlert', { detail: { message: data.msg } }));
                        setIsLoggedIn(true);
                    }
                    //console.log(user);
                    //console.log(data);
                }catch(e){
                   localStorage.removeItem('token');
                   console.error(e)
                }
        }
        checkLoginStatus();
    }, [])
    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         try{
    //             const {data} = await axios.get(`/auth/isloggedin`)
    //             if(data.status === true){
    //                 setUser(data.user)
    //             }
    //             console.log(user);
    //         }catch(e){
    //             console.error(e)
    //         }
    //     }
    //     checkLoginStatus();
    // }, [])
    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         try{
    //             const {data} = await axios.get(`/auth/isloggedin`)
    //             if(data.status === true){
    //                 setUser(data.user)
    //             }
    //         }catch(e){
    //             console.error(e)
    //         }
    //         console.log(user);
    //     }
    //     checkLoginStatus();
    // }, [isLoggedIn])

    //tutaj useEffectem sprawdzic sesje czy jestem zalogowany jesli tak to setIsLoggedIn(true) i setUser(id,login)
    //Tutaj useEffect za pierwszym renderem - sprawdzenie czy jestem zalogowany jak tak to setIsLoggedIn(true) - todo sprawdzic czy to dziala - za kazdym zalogowaniem zrob init wszystkich state'ów (???)
    
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems);

    //OLD MainSection - lifting states up
    //kategorie pobrane z bazy danych - jesli bedzie ich wiecej niz x to wtedy wyswietl je tak jak mobile
    //const categories = ["fruits", "vegetables", "three", "dsadxzas", "dsaddsas", "dsadacs", "dsadasdas"]
    const [categoriesFromDB, setCategoriesFromDB] = useState([]);
    useEffect(() => {
        const fetchCategoriesFromDB = async () => {
            try{
                const {data} = await axios.get(`/categories`)
                setCategoriesFromDB(data)
            }catch(e){
                console.error(e);
            }
        }
        fetchCategoriesFromDB();
    }, [])

    const [alignmentCategory, setAlignmentCategory] = useState(categoriesFromDB[0] ? categoriesFromDB[0] : null ); 
    useEffect(() => {
        setAlignmentCategory(categoriesFromDB[0]);
    }, [categoriesFromDB])

    const [dataFromDB, setDataFromDB] = useState([]);
    useEffect(()=>{
        const fetchDataFromDB = async (category) => {
            try{
                const {data} = await axios.get(`/items/${category}`)
                setDataFromDB(data)
            }catch(e){
                console.error(e)
            }
        }
        fetchDataFromDB(alignmentCategory);
    }, [alignmentCategory])

    return (
    <>
        <NavBar isLoggedIn={isLoggedIn} setUser={setUser} setIsLoggedIn={setIsLoggedIn} numberOfItemsInCart={cartItems.length} cartItems={cartItems} setCartItems={setCartItems} user={user} toggleTheme={toggleTheme}/>
        <MainSection isLoggedIn={isLoggedIn} 
            setCartItems={setCartItems} 
            cartItems={cartItems}
            categories={categoriesFromDB}
            alignmentCategory={alignmentCategory}
            setAlignmentCategory={setAlignmentCategory}
            dataFromDB={dataFromDB}
            />
    </>
  )
}




    {/* <Typography variant="h1">{data.message}</Typography> */}
  // const [count, setCount] = useState(0)
  // const [data,setData] = useState({message: ""});

  // useEffect(() => {
  //   fetchMsgFromDB();
  // }, []);
  // const fetchMsgFromDB = async () => {
  //   const { data } = await axios.get("/getmsg")
  //   setData({message: [data.message]})
  // }


  // setDataFromDB([
        //     {
        //         id:1,
        //         name:"orange",
        //         imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
        //         price: 12.54,
        //         quantity: 10,      
        //     },
        //     {
        //         id:2,
        //         name:"apple",
        //         imgsrc:"https://media.istockphoto.com/id/495878092/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=B6fzd8JgZY8Fr2CBCiph2rWCUEeHhVqBll_xM5038rU=",
        //         price: 8.21,
        //         quantity: 15,      
        //     },
        //     {
        //         id:3,
        //         name:"strawberry",
        //         imgsrc:"https://media.istockphoto.com/id/471674664/photo/two-strawberries-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=cWUQwdDRxSks-WFj7OLZH9hkncEfq4pxpeCbQ7kQ8po=",
        //         price: 19.87,
        //         quantity: 30,      
        //     },
        //     {
        //         id:4,
        //         name:"grape",
        //         imgsrc:"https://media.istockphoto.com/id/803721418/pl/zdjęcie/winogrono-ciemne-winogrona-winogrona-z-izolowanymi-liśćmi-ze-ścieżką-przycinającą-pełna.jpg?s=2048x2048&w=is&k=20&c=d9hto4eyqkW0VE7H0mKgt9tlOx8ADLQ-Emd_cFiHZQI=",
        //         price: 21.32,
        //         quantity: 5,      
        //     },
        //     {
        //         id:5,
        //         name:"ananas",
        //         imgsrc:"https://media.istockphoto.com/id/1064819674/pl/zdjęcie/całość-z-plasterkiem-dojrzałego-ananasa-wyizolowanego-na-białym-tle.jpg?s=2048x2048&w=is&k=20&c=_3kWISh8rWtIGjrRgEZtJ8Xu0NNvQvcI2jutScbTOdY=",
        //         price: 30.67,
        //         quantity: 40,      
        //     },
        //     {
        //         id:6,
        //         name:"mango",
        //         imgsrc:"https://media.istockphoto.com/id/467328250/pl/zdjęcie/mango.jpg?s=2048x2048&w=is&k=20&c=SQtaz0Bf3LkrxoEWu0uwYQDtPueliuOaQg1J3GnCGkM=",
        //         price: 35.89,
        //         quantity: 22,      
        //     },
        //     {
        //         id:7,
        //         name:"blueberries",
        //         imgsrc:"https://media.istockphoto.com/id/1182799992/pl/zdjęcie/jagoda-z-liściem-wyizolowanym-na-białym-tle-ze-ścieżką-przycinającą.jpg?s=2048x2048&w=is&k=20&c=1UZxAS88LDU86dgofXOp0tvQBA2y3qkSs5mWFEb_qtM=",
        //         price: 20.11,
        //         quantity: 13,      
        //     },
        // ])