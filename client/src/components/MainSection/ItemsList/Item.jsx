import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'; //w tym przyciski itp
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { Button, InputLabel, Input } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import {currencyUnit, quantityUnit} from "../../../unitConfig"

export default function Item({data, isMobile}){
    return(
        <Card>
            <CardMedia
                component="img"
                alt={data.name}
                height="200"
                image={data.imgsrc}
            />
            <CardContent>
                <Typography color="text.secondary" variant="h4" sx={{mb: 2}}>
                    {data.name}
                </Typography>
                <Chip label={`Price: ${data.price} ${currencyUnit}`} sx={{mx: 1}}/>
                <Chip label={`Quantity: ${data.quantity} pcs`} sx={{mx: 1}}/>
            </CardContent>
            <CardActions sx={{mx: 1, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography>
                        number:
                    </Typography>
                    <FormControl sx={{ width: '5ch'}} variant="outlined">
                        <Input
                        size="small"
                            name={`numberOfItems${data.id}`}
                            id={`numberOfItems${data.id}`}
                            type="number"
                            required
                        />
                    </FormControl>
                </div>
                <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Add
                </Button>
            </CardActions>
        </Card>
    );
}