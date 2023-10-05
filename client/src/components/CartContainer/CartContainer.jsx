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
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:3,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:4,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:5,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:6,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },
            {
                id:7,
                name:"orange",
                imgsrc:"https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=",
                price: 12.54,
                quantity: 10,      
            },

        ])
    // }, [alignmentCategory])
    }, [])

    return (
    <>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} numberOfItemsInCart={cartItems.length}/>
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