import Grid from '@mui/material/Unstable_Grid2';
import Box from "@mui/material/Box"
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography"

export default function CartItemsList({cartItems}){
    return(
        <Box>
            {cartItems.map((elem) => {
                return <Grid container spacing={3}  xs={12} sx={{
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
                                <Typography>Name: {elem.name}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography>Quantity: {elem.quantity}</Typography>
                            </Grid>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography>Price: {elem.price}</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                                <Typography>Total Price: {elem.price}</Typography>
                            </Grid>
                            <Grid item xs={12}><Divider/></Grid>
                    </Grid>
                })}
        </Box>
    );
}