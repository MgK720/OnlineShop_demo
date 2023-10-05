import { useEffect, useState } from 'react'
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "./Item";

export default function ItemsList({dataFromDB, isLoggedIn, addItemToCart, handleChange, numberOfItems}) {

    return(
        <Grid container spacing={2} sx={{mt:1}}>
            {dataFromDB.map((elem) => {
                return <Grid xs={12} xl={2} lg={3} md={3} sm={6} key={elem.id}>
                            <Item data={elem} isLoggedIn={isLoggedIn} numberOfItems={numberOfItems} handleChange={handleChange} addItemToCart={addItemToCart}/>
                        </Grid>
            })}
        </Grid>
    );
}

