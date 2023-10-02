import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'
import { useEffect, useState } from "react";
import TextInput from "./TextInput";
//moze jescze endDecorator lub startDecorator dla inputów
//ustawić maxlength dla kazdej wartości

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
                const regExp = /[a-zA-Z]/g;
                const isInvalid = regExp.test(evt.target.value);
                setData((currData) => {
                    return {...currData, [evt.target.name]: {...currData[evt.target.name], inputError: {status: isInvalid, msg: isInvalid ? "This is not valid phone number": ""} }}
                })
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
        },
        isDataNotFilled: true
    })

    useEffect(()=>{
        const isDataFilled = !Object.values(data).some(field => field.inputValue === "");
        const noErrors = !Object.values(data).some(field => field.inputError && field.inputError.status === true);

        if(isDataFilled){
            setData((currData) => {
                return {...currData, isDataNotFilled: noErrors ? false : true}
            })
        }
    }, [data])

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
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        <Typography variant="h4" textAlign="center" sx={{textTransform:'uppercase'}}>Delivery data: </Typography>
                        <Divider sx={{mt:1}}/>
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
                        <Button variant="contained" fullWidth disabled={data.isDataNotFilled}>Confirm</Button>
                    </Grid>
                </Grid>
            </Box>
        </Dialog>
    );
}