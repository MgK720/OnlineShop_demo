import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'; //w tym przyciski itp
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import { Button, InputLabel, Input } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import {currencyUnit, quantityUnit} from "../../../unitConfig"

export default function Item({data, isLoggedIn, numberOfItems, handleChange, addItemToCart}){;
    const renderCardActions = (
        <CardActions sx={{mx: 1, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <FormControl sx={{ width: '5ch'}} variant="outlined">
                    <Typography>
                        num:
                    </Typography>
                    <Input
                        size="small"
                        value={numberOfItems[`numberOfItems_${data.id}`]}
                        onChange={(evt) => handleChange(evt, data.quantity)}
                        name={`numberOfItems_${data.id}`}
                        id={`numberOfItems_${data.id}`}
                        type="number"
                        required
                        sx={{ ml: 0.2, width: '5.5ch' }}
                    />
                </FormControl>
                <Button variant="contained" endIcon={<AddShoppingCartIcon/>} id={`add_${data.id}`} onClick={(evt) => addItemToCart(evt, data.name, data.imgsrc, data.quantity, data.price)}>
                    Add
                </Button>
            </CardActions>
    )
    return(
        <Card>
            <CardMedia
                component="img"
                alt={data.name}
                height="200"
                image={data.imgsrc}
            />
            <CardContent>
                <Typography color="text.secondary" variant="h4" sx={{mb: 1.5}}>
                    {data.name}
                </Typography>
                <Chip label={`Price: ${data.price} ${currencyUnit}`} sx={{mx: 0.5 , mt:1}}/>
                <Chip label={`Quantity: ${data.quantity} ${quantityUnit}`} sx={{mx: 0.5, mt:1}}/>
            </CardContent>
            {isLoggedIn && renderCardActions}
        </Card>
    );
}