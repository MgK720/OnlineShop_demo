import axios from "axios";
import Box from '@mui/material/Box';
import {useState, useEffect} from "react"
import { Dialog, Typography, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import PasswordFormControl from './FormControls/PasswordFormControl';
import LoginFormControl from './FormControls/LoginFormControl';

export default function SignInForm({open, setUser, handleClose, signInError, setSignInError}){
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

    const [loginResponse, setLoginResponse] = useState({})
    const signIn = async () => {
      const noErrors = !inputError.login && !inputError.password;
      const allRequiredDataFilled = loginData.login && loginData.password
      if(noErrors && allRequiredDataFilled){
        let data = {};
          try{
            data = (await axios.post(`/auth/login`, {login: loginData.login, password: loginData.password })).data;
            console.log(data);
          }catch(e){
            console.error(e);
          }
          setUser(data.user);
          setLoginResponse({error: data.error, msg: data.msg})
          localStorage.setItem('token', data.token)
          data.error === false ? setSignInError({signTry: true, error: false}) : setSignInError({signTry: true, error: true});
      }
    }

    const signInAlert = (loginResponse) => (
      <Alert severity={loginResponse.error ? 'error' : 'success'} sx={{mt:2}}>{loginResponse.msg}</Alert>
    )

    // const signInErrorAlert = () => (
    //     <Alert severity="error" sx={{mt:2}}>Sign in Failed - incorrect data</Alert>
    // )
    // const signInSuccessAlert = () => (
    //     <Alert severity="success" sx={{mt:2}}>Signed in</Alert>
    // )
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
            <Typography variant="h5" textAlign="center" sx={{textTransform:'uppercase'}}>Sign in</Typography>
            <Divider sx={{mb:1, mt:1}}/>
            <LoginFormControl inputError={inputError.login} loginState={loginData.login} handleChange={handleChange}/>
            <PasswordFormControl inputError={inputError.password} passwordState={loginData.password} handleChange={handleChange}/>
            <Button variant="contained" fullWidth onClick={signIn} disabled={isDataNotFilled}>Login</Button>
            {signInError.signTry ? signInAlert(loginResponse) : null }
        </Box>
      </Dialog>
    );
}