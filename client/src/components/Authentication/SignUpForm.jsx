import axios from "../../axiosConfig";
import Box from '@mui/material/Box';
import {useState, useEffect} from "react"
import { Dialog, Typography, Divider } from '@mui/material';
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
        setIsDataNotFilled(true)
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

    useEffect (() => {
        if(registerData.login, registerData.password, registerData.passwordRep){
          setIsDataNotFilled(false);
        }
      }, [registerData.login, registerData.password, registerData.passwordRep]) 
      
    const initInputError = {login: null, password: null, passwordRep: null, errorMsg:null}
    const [inputError, setInputError] = useState(initInputError)

    const [isDataNotFilled, setIsDataNotFilled] = useState(true);

    const [registerResponse, setRegisterResponse] = useState({})
    const signUp = async () => {
        const noErrors = !inputError.login && !inputError.password && !inputError.passwordRep;
        const allRequiredDataFilled = registerData.login && registerData.password && registerData.passwordRep 
        if(noErrors && allRequiredDataFilled ){
          let data = {};
          try{
            data = (await axios.post(`/auth/register`, {login: registerData.login, password: registerData.password, passwordRep: registerData.passwordRep })).data;
            console.log(data);
          }catch(e){
            console.error(e);
          }
          setRegisterResponse(data);
          data.error === false ? setSignUpError({signUpTry: true, error: false}) : setSignUpError({signUpTry: true, error: true});
          console.log(signUpError)
        }
      }
    
    const signUpAlert = (registerResponse) => (
        <Alert severity={registerResponse.error ? 'error' : 'success'} sx={{mt:2}}>{registerResponse.msg}</Alert>
    )

    // const signUpErrorAlert = (registerAlertMsg) => (
    //     // <Alert severity="error" sx={{mt:2}}>Sign up Failed - incorrect data</Alert>
    //     <Alert severity="error" sx={{mt:2}}>{registerAlertMsg}</Alert>
    // )
    // const signUpSuccessAlert = (registerAlertMsg) => (
    //     // <Alert severity="success" sx={{mt:2}}>Account created !!!</Alert>
    //     <Alert severity="success" sx={{mt:2}}>{registerAlertMsg}</Alert>
    // )
    
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
                <Typography variant="h5" textAlign="center" sx={{textTransform:'uppercase'}}>Sign up</Typography>
                <Divider sx={{mb:1, mt:1}}/>
                <LoginFormControl inputError={inputError.login} loginState={registerData.login} handleChange={handleChange}/>
                <PasswordFormControl inputError={inputError.password} passwordState={registerData.password} handleChange={handleChange} nonMb={true}/>
                <PasswordFormControl inputError={inputError.passwordRep} errorMsg={inputError.errorMsg} passwordState={registerData.passwordRep} handleChange={handleChange} inputName="passwordRep" label="Confirm-Password"/>
                <Button variant="contained" fullWidth onClick={signUp} disabled={isDataNotFilled}>Register</Button>
                {/* {signUpError.signUpTry && (signUpError.error ? <div>{signUpErrorAlert(registerAlertMsg)}</div> : <div>{signUpSuccessAlert(registerAlertMsg)}</div>) } */}
                {signUpError.signUpTry ? signUpAlert(registerResponse) : null } 
            </Box>
        </Dialog>
    );
}