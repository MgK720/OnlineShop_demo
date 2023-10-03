import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, value, theme) {
    return {
      fontWeight:
        value.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function MobileCategoryList({categories, alignment, handleChange}){
    const theme = useTheme();
    return (
        <FormControl sx={{ width: 300 }}>
            <InputLabel id="categorySelector">Category</InputLabel>
                <Select
                    labelId='categorySelector'
                    value={alignment}
                    onChange={handleChange}
                    input={<OutlinedInput label="Category" />}
                    MenuProps={MenuProps}
                    sx={{
                        fontWeight: theme.typography.fontWeightMedium,
                    }}
                >
                {categories.map((elem, index) => (
                    <MenuItem value={elem} key={index} style={getStyles(elem, alignment, theme)}>
                    {elem}
                    </MenuItem>
                ))}
                </Select>
        </FormControl>
      );
}
