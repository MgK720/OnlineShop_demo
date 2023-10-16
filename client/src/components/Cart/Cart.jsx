import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { useEffect, useState } from "react";
import CartItemsList from "./CartItemsList"

export default function Cart({open, handleClose, isProfileComplete, cartItems}) {
    //zliczanie totalPrice na koniec przed przyciskiem zamów (if isProfileComplete)
    return (
        <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }} maxWidth>
            <Box
                sx={{
                    width:"md",
                    height: 500,
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
                    <Grid xs={12}>
                        <CartItemsList cartItems={cartItems}/>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}