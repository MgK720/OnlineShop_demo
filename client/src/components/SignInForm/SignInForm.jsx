import Box from '@mui/material/Box';
import {useState} from "react"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Dialog, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function SignInForm({open, handleClose, signInError, setSignInError}){
    const [loginData, setLoginData] = useState({
      login: "",
      password: ""
    })
    const handleChange = (evt) => {
      setInputError((currData) =>{
        return {...currData, [evt.target.name]: evt.target.value.length < 8 ? true : false}
      });
      setLoginData((currData) =>{
        return {...currData, [evt.target.name]: evt.target.value}
      })
    }

    const [showPassword, setShowPassword] = useState(false);
    const [inputError, setInputError] = useState({login: null, password: null});

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const signIn = () => {
      if(!inputError.login && !inputError.password){
        const responseOK = 1; //1 - done
        responseOK ? setSignInError({signTry: true, error: false}) : setSignInError({signTry: true, error: true});
      }
    }
    return (
      <Dialog open={open} onClose={handleClose} sx={{p:0, m:0 }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width:300,
            m:1,
            p:3,
            pb:4
          }}
        >
            <Typography variant="h5" textAlign="center" sx={{mb:2, textTransform:'uppercase'}}>Sign in</Typography>
            <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined" error={inputError.login}>
              <InputLabel htmlFor="login">Login</InputLabel>
              <OutlinedInput
                  value={loginData.login}
                  onChange={handleChange}
                  name="login"
                  id="login"
                  label="Login"
                  required
                  fullWidth
              />
              {inputError.login && <FormHelperText id="login-helper">Login is too short</FormHelperText>}
            </FormControl>
            <FormControl sx={{ m: 1,mb:3, width: '35ch' }} variant="outlined" error={inputError.password}>
              <InputLabel htmlFor="login">Password</InputLabel>
              <OutlinedInput
                  value={loginData.password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                  </InputAdornment>
                  }
                  label="Password"
                  required
                  fullWidth
              />
              {inputError.password && <FormHelperText id="password-helper">Password is too short</FormHelperText>}
            </FormControl>
            <Button variant="contained" fullWidth onClick={signIn}>Login</Button>
            {signInError.signTry && (signInError.error ? <Alert severity="error" sx={{mt:2}}>Sign in Failed - incorrect data</Alert> : <Alert severity="success" sx={{mt:2}}>Signed in</Alert>) }
        </Box>
      </Dialog>
    );
}