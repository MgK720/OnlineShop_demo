import DesktopCategoryList from "./CategoryList/DesktopCategoryList"
import MobileCategoryList from "./CategoryList/MobileCategoryList";
//import ItemsList from "./ItemsList/ItemsList"

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

import { useMediaQuery } from '@mui/material';

export default function MainSection() {
    const isMobile = useMediaQuery('(max-width:600px)');

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

    useEffect(()=>{
        //Dane pobrane z db z danej kategorii SELECT * FROM ITEMS WHERE CAT=[alignmentCategorie];
        const dataFromDB = [
            {
                id:1,
                name:"orange",
                imgsrc:"jakissrc",
            }
        ]
    }, [alignmentCategorie])

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
                    {/*<ItemsList />*/}
                </Grid>
            </Grid>
        </Box>
    );
}