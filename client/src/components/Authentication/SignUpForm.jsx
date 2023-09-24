import Box from '@mui/material/Box';
import {useState, useEffect} from "react"
import { Dialog, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import PasswordFormControl from './FormControls/PasswordFormControl';
import LoginFormControl from './FormControls/LoginFormControl';

export default function SignUpForm ({open, handleClose, signUpError, setSignUpError}) {
    const initData = {
        login: "",
        password: "",
        passwordRep: ""
    }
    const [registerData, setRegisterData] = useState(initData)

    useEffect(()=>{
        setRegisterData(initData);
        setInputError(initInputError);
      }, [open])
    
    //In the future use validation tools !!! (eg Formik)
    const handleChange = (evt) => {
        if(evt.target.name == "passwordRep"){
            const isTheSame = evt.target.value === registerData.password
            setInputError((currData) =>{
                return {...currData, errorMsg: isTheSame ? null : "Password is not the same", [evt.target.name]: isTheSame ? false : true}
            });
        }
        if(evt.target.name !== "passwordRep"){
            setInputError((currData) =>{
                return {...currData, [evt.target.name]: evt.target.value.length < 8 ? true : false}
            });
        }
        setRegisterData((currData) =>{
          return {...currData, [evt.target.name]: evt.target.value}
        })
      }
    const initInputError = {login: null, password: null, passwordRep: null, errorMsg:null}
    const [inputError, setInputError] = useState(initInputError)

    const signUp = () => {
        const noErrors = !inputError.login && !inputError.password && !inputError.passwordRep;
        const allRequiredDataFilled = registerData.login && registerData.password && registerData.passwordRep 
        if(noErrors && allRequiredDataFilled ){
          const responseOK = 1; //1 - done
          responseOK ? setSignUpError({signUpTry: true, error: false}) : setSignUpError({signUpTry: true, error: true});
        }
      }

    const signUpErrorAlert = () => (
        <Alert severity="error" sx={{mt:2}}>Sign up Failed - incorrect data</Alert>
    )
    const signUpSuccessAlert = () => (
        <Alert severity="success" sx={{mt:2}}>Account created !!!</Alert>
    )
    return(
        <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }}>
            <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                maxWidth:300,
                display:'flex',
                flexDirection:'column',
                m:1,
                p:3,
                pb:4
            }}
            >
                <Typography variant="h5" textAlign="center" sx={{mb:2, textTransform:'uppercase'}}>Sign up</Typography>
                <LoginFormControl inputError={inputError.login} loginState={registerData.login} handleChange={handleChange}/>
                <PasswordFormControl inputError={inputError.password} passwordState={registerData.password} handleChange={handleChange} nonMb={true}/>
                <PasswordFormControl inputError={inputError.passwordRep} errorMsg={inputError.errorMsg} passwordState={registerData.passwordRep} handleChange={handleChange} inputName="passwordRep" label="Confirm-Password"/>
                <Button variant="contained" fullWidth onClick={signUp}>Register</Button>
                {signUpError.signUpTry && (signUpError.error ? <div>{signUpErrorAlert()}</div> : <div>{signUpSuccessAlert()}</div>) }
            </Box>
        </Dialog>
    );
}