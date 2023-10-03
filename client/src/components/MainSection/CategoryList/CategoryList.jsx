import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export default function CategoryList({categories, alignment, handleChange}){
  
    return (
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Categories"
        >
            {categories.map((elem, index) => {
                return <ToggleButton value={elem} key={index}>{elem}</ToggleButton>
            })}
        </ToggleButtonGroup>
      );
}