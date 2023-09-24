import InputLabel from '@mui/material/InputLabel';
import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function LoginFormControl({inputError, loginState, handleChange}){
    return(
        <FormControl sx={{ m: 1, ml:0, width: '100%'}} variant="outlined" error={inputError}>
              <InputLabel htmlFor="login">Login</InputLabel>
              <OutlinedInput
                  value={loginState}
                  onChange={handleChange}
                  name="login"
                  id="login"
                  label="Login"
                  required
                  fullWidth
              />
              {inputError && <FormHelperText id="login-helper">Login is too short</FormHelperText>}
        </FormControl>
    );
}