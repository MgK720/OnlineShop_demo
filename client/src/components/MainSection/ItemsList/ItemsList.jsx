import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "./Item";

export default function ItemsList({dataFromDB, isMobile}) {
    return(
        <Grid container spacing={2} sx={{mt:1}}>
            {dataFromDB.map((elem) => {
                return <Grid xs={12} lg={2} md={3} sm={6} key={elem.id}><Item data={elem} isMobile={isMobile}/></Grid>
            })}
        </Grid>
    );
}