import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography"

export default function CartItemsList({cartItems}){
    //pobrac unit zł/dolar itp...
    return(
        <Box>
            {cartItems.map((elem) => {
                return <Grid container spacing={3}  xs={12} sx={{
                        m:2,
                        ml:-0.4,
                        flexGrow: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                    }}> 
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width:150,
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
                                <Typography variant='h5'>Price: {elem.price} $</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography variant='h5'>Total Price: {elem.price * elem.quantity} $</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider/></Grid>
                    </Grid>
                })}
        </Box>
    );
}