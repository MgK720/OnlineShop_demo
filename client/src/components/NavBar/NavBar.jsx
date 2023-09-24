import {useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInForm from '../Authentication/SignInForm';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function NavBar({isLoggedIn, setIsLoggedIn}) {
    const notAuthenticatedMenu = [
        {
            name: "register",
            onClick: null,
            icon: <PersonAddIcon />
        },
        {
            name: "login",
            onClick: () => {
                openSignInForm()
            },
            icon: <LoginIcon />
        }
    ]
    const authenticatedMenu = [
        {
            name: "profile",
            onClick: null,
            icon: <AccountCircleIcon/>
        },
        {
            name: "cart",
            onClick: null,
            icon: <ShoppingCartIcon/>
        }
    ]
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

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                OnlineShop
            </Typography>
            <DesktopMenu isLoggedIn={isLoggedIn} notAuthenticatedMenu={notAuthenticatedMenu} authenticatedMenu={authenticatedMenu}/>
            <MobileMenu isLoggedIn={isLoggedIn} notAuthenticatedMenu={notAuthenticatedMenu} authenticatedMenu={authenticatedMenu}/>
            </Toolbar>
        </AppBar>
        <SignInForm open={open} handleClose={handleClose} signInError={signInError} setSignInError={setSignInError} />
        </Box>
    );
}