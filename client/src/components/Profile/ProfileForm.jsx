import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'
import { useState } from "react";
import TextInput from "./TextInput";
//{inputError, inputName, inputValue, handleChange, isRequired}

export default function DeliveryForm({open, handleClose, isProfileComplete, setIsProfileComplete}) {
    const [data, setData] = useState({
        firstname: {
            inputName: 'firstname',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        lastname: {
            inputName: 'lastname',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        phoneNumber: {
            inputName: 'phoneNumber',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        city: {
            inputName: 'city',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        zipCode: {
            inputName: 'zipCode',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        street: {
            inputName: 'street',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        },
        houseNumber: {
            inputName: 'houseNumber',
            inputValue: "",
            isRequired: true,
            handleChange: (evt) => {
                handleChangeFunc(evt)
            },
            inputError: {
                status:false,
                msg: ""
            }
        }
    })

    const handleChangeFunc = (evt) => {
        const { name, value } = evt.target;
        setData((currData) =>{
            return {...currData, [name]: { ...currData[name], inputValue: value} }
        })
    }
    return (
        <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    maxWidth:1000,
                    flexGrow: 1,
                    m:3,
                    p:1
                }}
            >
                <Grid container spacing={3}>
                    <Grid xs={12}>
                        <Typography variant="h4" textAlign="center" sx={{textTransform:'uppercase'}}>Delivery data: </Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.firstname}/>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.lastname}/>
                    </Grid>
                    <Grid xs={12} md={6} mdOffset={3}>
                        <TextInput data={data.phoneNumber}></TextInput>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant="h6" textAlign="center" sx={{textTransform:'uppercase'}}>Address: </Typography>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.city}></TextInput>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.zipCode}></TextInput>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.street}></TextInput>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextInput data={data.houseNumber}></TextInput>
                    </Grid>
                    <Grid xs={12} md={9} mdOffset={1.5}>
                        <Button variant="contained" fullWidth >Confirm</Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}