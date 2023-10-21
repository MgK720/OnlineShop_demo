import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography"
import {currencyUnit, quantityUnit} from "../../unitConfig"
import { useMediaQuery } from '@mui/material';
export default function CartItemsList({cartItems}){
    const isMobile = useMediaQuery('(max-width:900px)');

    return(
        <Box>
            {cartItems.map((elem) => {
                return <Grid container spacing={3}  xs={12} sx={{
                        m:1,
                        ml:-0.4,
                        flexGrow: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}> 
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: isMobile ? 200 : 100
                                    }}
                                    alt={elem.name}
                                    src={elem.imgsrc}
                                />
                            </Grid> 
                            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant='h5'>Name: {elem.name}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography variant='h5'>Quantity: {elem.quantity}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography variant='h5'>Price: {elem.price}{currencyUnit}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography variant='h5'>Total Price: {(elem.price * elem.quantity).toFixed(2)}{currencyUnit}</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider/></Grid>
                    </Grid>
                })}
        </Box>
    );
}