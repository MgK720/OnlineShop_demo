import Box from '@mui/material/Box';
import {useState, useEffect} from "react"
import { Dialog, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import PasswordFormControl from './FormControls/PasswordFormControl';
import LoginFormControl from './FormControls/LoginFormControl';

export default function SignInForm({open, handleClose, signInError, setSignInError}){
    const initData = {
        login: "",
        password: ""
    };

    const [loginData, setLoginData] = useState(initData)

    useEffect(()=>{
      setLoginData(initData);
      setInputError(initInputError)
      setIsDataNotFilled(true)
    }, [open])

    const handleChange = (evt) => {
      setInputError((currData) =>{
        return {...currData, [evt.target.name]: evt.target.value.length < 8 ? true : false}
      });
      setLoginData((currData) =>{
        return {...currData, [evt.target.name]: evt.target.value}
      })
    }
   
    useEffect (() => {
      if(loginData.login && loginData.password){
        setIsDataNotFilled(false);
      }
    }, [loginData.login, loginData.password])

    const initInputError = {login: null, password: null}
    const [inputError, setInputError] = useState(initInputError);
   
    const [isDataNotFilled, setIsDataNotFilled] = useState(true);

    const signIn = () => {
      const noErrors = !inputError.login && !inputError.password;
      const allRequiredDataFilled = loginData.login && loginData.password
      if(noErrors && allRequiredDataFilled){
        const responseOK = 1; //1 - done
        responseOK ? setSignInError({signTry: true, error: false}) : setSignInError({signTry: true, error: true});
      }
    }

    const signInErrorAlert = () => (
        <Alert severity="error" sx={{mt:2}}>Sign in Failed - incorrect data</Alert>
    )
    const signInSuccessAlert = () => (
        <Alert severity="success" sx={{mt:2}}>Signed in</Alert>
    )
    return (
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
            <Typography variant="h5" textAlign="center" sx={{mb:2, textTransform:'uppercase'}}>Sign in</Typography>
            <LoginFormControl inputError={inputError.login} loginState={loginData.login} handleChange={handleChange}/>
            <PasswordFormControl inputError={inputError.password} passwordState={loginData.password} handleChange={handleChange}/>
            <Button variant="contained" fullWidth onClick={signIn} disabled={isDataNotFilled}>Login</Button>
            {signInError.signTry && (signInError.error ? <div>{signInErrorAlert()}</div> : <div>{signInSuccessAlert()}</div>) }
        </Box>
      </Dialog>
    );
}