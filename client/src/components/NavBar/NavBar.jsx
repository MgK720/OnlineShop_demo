import {useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SignInForm from '../Authentication/SignInForm';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

export default function NavBar({isLoggedIn, setIsLoggedIn}) {
    const [signInError, setSignInError] = useState({signTry: false, error: false});
    const [open, setOpen] = useState(false);

    const openSignInForm = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const closeSignInComponent = () => {
        setTimeout(()=>{
            setOpen(false),
            setIsLoggedIn(true)
        }, 1000);
    }
    if(signInError.signTry && !signInError.error){
        closeSignInComponent();
    }

    //Wywalić do component niżej
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl)
    const handleClickMenu = (evt) =>{
        setAnchorEl(evt.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
      };
    //Przerobić na liste menuItemów w tym komponencie i wywolać list.map(elementListy)
    const renderNotAuthenticatedMenu = (
        <>
        <Button color="inherit" sx={{display: {xs: 'none', md: 'inline'}}}>Register</Button> 
        <Button color="inherit" onClick={openSignInForm} sx={{display: {xs: 'none', md: 'inline'}}}>Login</Button>
        </>
    );

    const mobileMenuItemsNotAuthenticated = (
        <MenuList>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem onClick={() => {openSignInForm(); handleCloseMenu()}}>LOGIN</MenuItem>
        </MenuList>
    )
    const mobileMenuItemsAuthenticated = (
        <MenuList>
            <MenuItem>Profile</MenuItem>
        </MenuList>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                OnlineShop
            </Typography>
            {!isLoggedIn ? <Box>{renderNotAuthenticatedMenu}</Box> : <Button color="inherit" sx={{display: {xs: 'none', md: 'inline'}}}>Account</Button> }
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none'}}}
                onClick={handleClickMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
            {!isLoggedIn ? <div>{mobileMenuItemsNotAuthenticated}</div> : <div>{mobileMenuItemsAuthenticated}</div>}
            </Menu>
            </Toolbar>
        </AppBar>
        <SignInForm open={open} handleClose={handleClose} signInError={signInError} setSignInError={setSignInError} />
        </Box>
    );
}