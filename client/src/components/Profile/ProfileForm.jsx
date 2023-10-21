import { Dialog, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
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
    //tutaj jeszcze useEffectem ustawiamy za kazdym razem gdy otwieramy dialog (zalezne od state'a open) - jakie dane maja sie wstawic w pola - pobrane z bazy danych
    useEffect(() =>{
        // const dataFromDB = ["Tom", "Statham", "434343434", "New York", "121-22121", "newroad", "123/2d"]
        const dataFromDB = 0;
        if(dataFromDB){
            setData((currData) => {
                return{
                    ...currData,
                    firstname: { ...currData.firstname, inputValue: dataFromDB[0] },
                    lastname: { ...currData.lastname, inputValue: dataFromDB[1] },
                    phoneNumber: { ...currData.phoneNumber, inputValue: dataFromDB[2] },
                    city: { ...currData.city, inputValue: dataFromDB[3] },
                    zipCode: { ...currData.zipCode, inputValue: dataFromDB[4] },
                    street: { ...currData.street, inputValue: dataFromDB[5] },
                    houseNumber: { ...currData.houseNumber, inputValue: dataFromDB[6] },
                }
            })
            setIsProfileComplete(true);
        }
        if(isProfileComplete){
            setCreateProfileError({confirmTry: false, status: false, msg: ""})
        } 
    }, [open])

    useEffect(()=>{
        if(open){
            const isDataFilled = !Object.values(data).some(field => field.inputValue === "");
            const noErrors = !Object.values(data).some(field => field.inputError && field.inputError.status === true);
            if(isDataFilled){
                setData((currData) => {
                    return {...currData, isDataNotFilled: noErrors ? false : true}
                })
            }else{
                setData((currData) => {
                    return {...currData, isDataNotFilled: true}
                })
            }
        }
    }, [data, open])

    const handleChangeFunc = (evt) => {
        const { name, value } = evt.target;
        setData((currData) =>{
            return {...currData, [name]: { ...currData[name], inputValue: value} }
        })
    }
    const [createProfileError, setCreateProfileError] = useState({confirmTry: false, status: false, msg:""})

    const createProfile = () => {
        if(!data.isDataNotFilled){
          const responseOK = 1; //1 - done
          responseOK ? setCreateProfileError({confirmTry: true, status: false, msg: "Profile created - now you can make order"}) : setCreateProfileError({confirmTry: true, status: true, msg: "Incorrect data"});
          responseOK && setIsProfileComplete(true);
        }
      }


    const confirmAlert = (status, msg) => {
        const alertType = status === false ? "success" : "error";
        return <Alert severity={alertType} sx={{mt:2}}>{msg}</Alert>
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
                        {/*??? https://github.com/viclafouch/mui-tel-input*/}
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
                        <Button variant="contained" onClick={createProfile} fullWidth disabled={data.isDataNotFilled}>Confirm</Button>
                    </Grid>
                    {createProfileError.confirmTry && <Grid xs={12}>{confirmAlert(createProfileError.status, createProfileError.msg)}</Grid>}
                </Grid>
            </Box>
        </Dialog>
    );
}