import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Unstable_Grid2';
import TextFormControl from "./TextFormControl"

export default function DeliveryForm({open, handleClose}) {
    return (
        <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    maxWidth:1000,
                    flexGrow: 1,
                    m:1,
                    p:1
                }}
            >
                <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth></TextField>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField fullWidth></TextField>
                    </Grid>
                    <Grid xs={6} mdOffset={3}>
                        <TextField fullWidth></TextField>
                    </Grid>
                    <Grid xs={12}>
                        <TextField fullWidth></TextField>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}