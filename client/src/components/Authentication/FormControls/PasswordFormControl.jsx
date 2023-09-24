import {useState} from "react"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function PasswordFormControl({inputError,errorMsg, passwordState, handleChange, inputName,label, nonMb}){
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <FormControl sx={{ m: 1,mb: nonMb ? 1 : 3, ml:0, width: '100%' }} variant="outlined" error={inputError}>
              <InputLabel htmlFor={inputName ? inputName : "password"}>{label ? label : "Password"}</InputLabel>
              <OutlinedInput
                  value={passwordState}
                  onChange={handleChange}
                  name={inputName ? inputName : "password"}
                  id={inputName ? inputName : "password"}
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
                  label={label ? label : "password"}
                  required
                  fullWidth
              />
              {inputError && <FormHelperText id="password-helper">{errorMsg ? errorMsg : "Password is too short"}</FormHelperText>}
        </FormControl>
    );
}