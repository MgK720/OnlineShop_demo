import DesktopCategoryList from "./CategoryList/DesktopCategoryList"
import MobileCategoryList from "./CategoryList/MobileCategoryList";
import ItemsList from "./ItemsList/ItemsList"

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Divider } from "@mui/material";

import { useMediaQuery } from '@mui/material';

export default function MainSection() {
    const isMobile = useMediaQuery('(max-width:900px)');

    //kategorie pobrane z bazy danych
    const categories = ["onegfdgdf", "twodsadsa", "three", "dsadxzas", "dsaddsas", "dsadacs", "dsadasdas"]
    const [alignmentCategorie, setAlignmentCategorie] = useState(categories[0] ? categories[0] : null ); //która kategoria ma się wyświetlić w ItemsList

    const handleChangeCategories = (event, newAlignment) => {
        if(!isMobile){
            if (newAlignment !== null) {
                setAlignmentCategorie(newAlignment);
            }
        }else{
            setAlignmentCategorie(event.target.value);
        }
    };

    const [dataFromDB, setDataFromDB] = useState([]);
    useEffect(()=>{
        //Dane pobrane z db z danej kategorii SELECT * FROM ITEMS WHERE CAT=[alignmentCategorie]; - oczywiscie async func
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
    // }, [alignmentCategorie])
    }, [])

    const renderDesktopCategoryList = (
        <DesktopCategoryList categories={categories} alignment={alignmentCategorie} handleChange={handleChangeCategories} />
    )
    const renderMobileCategoryList = (
        <MobileCategoryList categories={categories} alignment={alignmentCategorie} handleChange={handleChangeCategories} />
    )
    return(
        <Box
                component="div"
                sx={{
                    maxWidth: 3000,
                    flexGrow: 1,
                    m:3,
                    p:1
                }}
            >
            <Grid xs={12} md={8} mdOffset={2} sx={{textAlign: 'center'}}>
                <Grid xs={12} md={8} mdOffset={2}>
                    {isMobile ? renderMobileCategoryList : renderDesktopCategoryList} 
                </Grid>
                <Grid xs={12} md={10} mdOffset={1}>
                    <ItemsList dataFromDB={dataFromDB} isMobile={isMobile}/>
                </Grid>
            </Grid>
        </Box>
    );
}