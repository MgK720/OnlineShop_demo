import NavBar from '../NavBar/NavBar';
import MainSection from '../MainSection/MainSection';
import { useEffect, useState } from 'react'

export default function CartContainer(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //Tutaj useEffect za pierwszym renderem - sprawdzenie czy jestem zalogowany jak tak to setIsLoggedIn(true) - todo sprawdzic czy to dziala - za kazdym zalogowaniem zrob init wszystkich state'ów (???)
    
    //Cart - wazne!!! zrobic przycisk juz w dialogu cart do wyczyszczenia koszyka - tak samo jak zlozymy zamowienie to clear cart
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems);

    //OLD MainSection - lifting states up
    //kategorie pobrane z bazy danych - jesli bedzie ich wiecej niz x to wtedy wyswietl je tak jak mobile
    const categories = ["onegfdgdf", "twodsadsa", "three", "dsadxzas", "dsaddsas", "dsadacs", "dsadasdas"]
    const [alignmentCategory, setAlignmentCategory] = useState(categories[0] ? categories[0] : null ); //która kategoria ma się wyświetlić w ItemsList

    const [dataFromDB, setDataFromDB] = useState([]);
    useEffect(()=>{
        //Dane pobrane z db z danej kategorii SELECT * FROM ITEMS WHERE CAT=[alignmentCategory]; - oczywiscie async func
        setDataFromDB([
            {
                id:1,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:2,
                name:"apple",
                imgsrc:"https://media.istockphoto.com/id/495878092/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=B6fzd8JgZY8Fr2CBCiph2rWCUEeHhVqBll_xM5038rU=",
                price: 8.21,
                quantity: 15,      
            },
            {
                id:3,
                name:"strawberry",
                imgsrc:"https://media.istockphoto.com/id/471674664/photo/two-strawberries-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=cWUQwdDRxSks-WFj7OLZH9hkncEfq4pxpeCbQ7kQ8po=",
                price: 19.87,
                quantity: 30,      
            },
            {
                id:4,
                name:"grape",
                imgsrc:"https://media.istockphoto.com/id/803721418/pl/zdjęcie/winogrono-ciemne-winogrona-winogrona-z-izolowanymi-liśćmi-ze-ścieżką-przycinającą-pełna.jpg?s=2048x2048&w=is&k=20&c=d9hto4eyqkW0VE7H0mKgt9tlOx8ADLQ-Emd_cFiHZQI=",
                price: 21.32,
                quantity: 5,      
            },
            {
                id:5,
                name:"ananas",
                imgsrc:"https://media.istockphoto.com/id/1064819674/pl/zdjęcie/całość-z-plasterkiem-dojrzałego-ananasa-wyizolowanego-na-białym-tle.jpg?s=2048x2048&w=is&k=20&c=_3kWISh8rWtIGjrRgEZtJ8Xu0NNvQvcI2jutScbTOdY=",
                price: 30.67,
                quantity: 40,      
            },
            {
                id:6,
                name:"mango",
                imgsrc:"https://media.istockphoto.com/id/467328250/pl/zdjęcie/mango.jpg?s=2048x2048&w=is&k=20&c=SQtaz0Bf3LkrxoEWu0uwYQDtPueliuOaQg1J3GnCGkM=",
                price: 35.89,
                quantity: 22,      
            },
            {
                id:7,
                name:"blueberries",
                imgsrc:"https://media.istockphoto.com/id/1182799992/pl/zdjęcie/jagoda-z-liściem-wyizolowanym-na-białym-tle-ze-ścieżką-przycinającą.jpg?s=2048x2048&w=is&k=20&c=1UZxAS88LDU86dgofXOp0tvQBA2y3qkSs5mWFEb_qtM=",
                price: 20.11,
                quantity: 13,      
            },

        ])
    // }, [alignmentCategory])
    }, [])

    return (
    <>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} numberOfItemsInCart={cartItems.length} cartItems={cartItems} setCartItems={setCartItems}/>
        <MainSection isLoggedIn={isLoggedIn} 
            setCartItems={setCartItems} 
            cartItems={cartItems}
            categories={categories}
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