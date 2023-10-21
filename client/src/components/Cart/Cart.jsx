import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useEffect, useState } from "react";
import CartItemsList from "./CartItemsList"
import {currencyUnit, quantityUnit} from "../../unitConfig"
import ClearIcon from '@mui/icons-material/Clear';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function Cart({open, handleClose, isProfileComplete, cartItems, setCartItems}) {
    const cartPrice = cartItems.reduce((total, item) => {
        const itemTotal = item.quantity * item.price;
        return total + itemTotal;
    }, 0);
    const renderCartPrice = (
        <Grid xs={12}>
            <Typography variant='h4'>Cart Price: {cartPrice.toFixed(2)}{currencyUnit}</Typography>
        </Grid>
    )
    const clearCart = () => {
        setCartItems([]);
    }
    return (
        <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }} maxWidth>
            <Box
                sx={{
                    width:"md",
                    height: 700,
                    flexGrow: 1,
                    m:3,
                    p:1
                }}
            >
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Typography variant="h4" textAlign="center" sx={{textTransform:'uppercase'}}>Cart: </Typography>
                        <Divider sx={{mt:1}}/>
                    </Grid>
                    <Grid xs={12} sx={{textAlign: "center", m: 2}}>
                        {cartItems.length ? <CartItemsList cartItems={cartItems}/> : <Grid xs={12}><Typography variant="h5">Empty Cart</Typography> </Grid> }
                        {cartPrice ? renderCartPrice : null}
                        <Grid xs={12} sx={{m:3}}>
                            {!isProfileComplete && <Alert severity="warning">You must complete profile before order</Alert>}
                            <Button variant="contained" size="large" disabled={!isProfileComplete} sx={{mt:2}} fullWidth endIcon={<CreditCardIcon/>}>
                                order
                            </Button>
                        </Grid>
                        <Grid xs={12} sx={{m:3, mt:-2}}>
                            <Button variant="contained" size="large" color="error" fullWidth endIcon={<ClearIcon/>} onClick={clearCart}>
                                clear cart
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}