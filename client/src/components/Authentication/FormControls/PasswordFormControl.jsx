import {useState} from "react"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function PasswordFormControl({inputError, passwordState, handleChange}){
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <FormControl sx={{ m: 1,mb:3, ml:0, width: '100%' }} variant="outlined" error={inputError}>
              <InputLabel htmlFor="login">Password</InputLabel>
              <OutlinedInput
                  value={passwordState}
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
              {inputError && <FormHelperText id="password-helper">Password is too short</FormHelperText>}
        </FormControl>
    );
}