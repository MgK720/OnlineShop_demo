import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function TextInput({data}){
    return(
        <FormControl variant="outlined" error={data.inputError.status} sx={{width:'100%'}}>
              <InputLabel htmlFor={data.inputName} sx={{textTransform: 'capitalize'}}>{data.inputName}</InputLabel>
              <OutlinedInput
                  value={data.inputValue}
                  onChange={data.handleChange}
                  name={data.inputName}
                  id={data.inputName}
                  label={data.inputName}
                  required={data.isRequired}
                  fullWidth
              />
              {data.inputError.status && <FormHelperText id={data.inputName + "-helper"}>{data.inputError.msg}</FormHelperText>}
        </FormControl>
    );
}