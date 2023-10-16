import DesktopCategoryList from "./CategoryList/DesktopCategoryList"
import MobileCategoryList from "./CategoryList/MobileCategoryList";
import ItemsList from "./ItemsList/ItemsList"

import { useEffect, useState } from "react";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Divider } from "@mui/material";

import { useMediaQuery } from '@mui/material';

export default function MainSection({isLoggedIn, cartItems,setCartItems, alignmentCategory,categories, setAlignmentCategory, dataFromDB}) {
    const [numberOfItems, setNumberOfItems] = useState(() => initNumberOfItemsObject(dataFromDB))

    const isMobile = useMediaQuery('(max-width:900px)');

    //handling categories
    const handleChangeCategories = (event, newAlignment) => {
        if(!isMobile){
            if (newAlignment !== null) {
                setAlignmentCategory(newAlignment);
            }
        }else{
            setAlignmentCategory(event.target.value);
        }
    };

    //handling cartItems
    useEffect(() => {
        setNumberOfItems(initNumberOfItemsObject(dataFromDB));
      }, [dataFromDB]);

    const handleChangeNumberOfItems = (evt, quantity) => {
        const { name, value } = evt.target;

        const numericValue = Number(value);

        if(numericValue > quantity || numericValue < 0){
            return;
        }
        setNumberOfItems((currData) => {
            return { ...currData, [name]: value };
        });
    }

    const addItemToCart = (evt, name, imgsrc, maxQuantity, price ) => {
        const buttonId = evt.target.id;
        const itemId = buttonId.match(/\d+$/)?.pop();
        const quantity = Number(numberOfItems[`numberOfItems_${itemId}`]) 

        if(!quantity || quantity > maxQuantity){
            return;
        }

        setCartItems((currData) => { 
            const updatedCartItems = [...currData];
            let itemExists = false;

            for (let i = 0; i < updatedCartItems.length; i++) {
                if (updatedCartItems[i].itemId === itemId) {
                    if(updatedCartItems[i].quantity + quantity <= maxQuantity){
                        updatedCartItems[i].quantity += quantity
                    }
                    itemExists = true;
                    break;
                }
            }

            if (!itemExists) {
                updatedCartItems.push({ itemId, name, imgsrc, quantity, maxQuantity, price });
            }

            return updatedCartItems;

            //return [...currData, {itemId: itemId, quantity: quantity} ]
        })
    }


    const renderDesktopCategoryList = (
        <DesktopCategoryList categories={categories} alignment={alignmentCategory} handleChange={handleChangeCategories} />
    )
    const renderMobileCategoryList = (
        <MobileCategoryList categories={categories} alignment={alignmentCategory} handleChange={handleChangeCategories} />
    )
    return(
        <Box
                component="div"
                sx={{
                    maxWidth: 3000,
                    flexGrow: 1,
                    m:3,
                    mt:9,
                    p:1
                }}
            >
            <Grid xs={12} md={8} mdOffset={2} sx={{textAlign: 'center'}}>
                <Grid xs={12} md={8} mdOffset={2}>
                    {isMobile ? renderMobileCategoryList : renderDesktopCategoryList} 
                </Grid>
                <Grid xs={12} md={10} mdOffset={1}>
                    <ItemsList dataFromDB={dataFromDB} 
                                isLoggedIn={isLoggedIn} 
                                setCartItems={setCartItems} 
                                addItemToCart={addItemToCart} 
                                handleChange={handleChangeNumberOfItems} 
                                numberOfItems={numberOfItems}
                            />
                </Grid>
            </Grid>
        </Box>
    );
}


const initNumberOfItemsObject = (data) => {
    const result = {};
    data.forEach((data) => {
        result[`numberOfItems_${data.id}`] = "1"; 
    });
    return result;
}
