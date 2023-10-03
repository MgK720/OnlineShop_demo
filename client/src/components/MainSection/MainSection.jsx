import CategoryList from "./CategoryList/CategoryList"
//import ItemsList from "./ItemsList/ItemsList"

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

export default function MainSection() {
    //kategorie pobrane z bazy danych
    const categories = ["one", "two", "three"]
    const [alignmentCategorie, setAlignmentCategorie] = useState(categories[0] ? categories[0] : null ); //która kategoria ma się wyświetlić w ItemsList

    const handleChangeCategories = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignmentCategorie(newAlignment);
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
                    <CategoryList categories={categories} alignment={alignmentCategorie} handleChange={handleChangeCategories} />
                </Grid>
                <Grid xs={12} md={10} mdOffset={1}>
                    {/*<ItemsList />*/}
                </Grid>
            </Grid>
        </Box>
    );
}