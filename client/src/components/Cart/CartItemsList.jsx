import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography"

export default function CartItemsList({cartItems}){
    return(
        <Grid>
            {cartItems.map((elem) => {
                return <Grid xs={12} sx={{
                    width:800,
                    flexGrow: 1,
                }}> 
                    <Grid xs={12} md={3}><img src={elem.imgsrc} style={{width: 200}}/></Grid>
                    <Grid xs={12} md={3}><Typography>{elem.name}</Typography></Grid>
                    <Divider/>
                </Grid>
            })}
        </Grid>
    );
}