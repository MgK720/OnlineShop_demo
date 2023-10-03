import ToggleButton from '@mui/material/ToggleButton';

export default function Category({name}){
    return (
        <ToggleButton value={name}>{name}</ToggleButton>
    );
}