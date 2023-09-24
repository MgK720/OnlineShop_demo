import {useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInForm from '../Authentication/SignInForm';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SignUpForm from "../Authentication/SignUpForm";

export default function NavBar({isLoggedIn, setIsLoggedIn}) {
    const notAuthenticatedMenu = [
        {
            name: "register",
            onClick: () => {
                openSignUpForm()
            },
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
        },
        {
            name: "logout",
            onClick: () => {
                logout()
            },
            icon: <LogoutIcon/>
        }
    ]
    //Login
    const [signInError, setSignInError] = useState({signTry: false, error: false});
    const [openSignIn, setOpenSignIn] = useState(false);

    const openSignInForm = () =>{
        setOpenSignIn(true);
    }
    const handleCloseSignIn = () =>{
        setOpenSignIn(false);
    }
    const closeSignInComponent = () => {
        setTimeout(()=>{
            setOpenSignIn(false),
            setIsLoggedIn(true)
        }, 1000);
    }
    if(signInError.signTry && !signInError.error){
        closeSignInComponent();
    }
    //Register
    const [signUpError, setSignUpError] = useState({signUpTry: false, error:false})
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignUpForm = () =>{
        setOpenSignUp(true);
    }
    const handleCloseSignUp = () =>{
        setOpenSignUp(false);
    }
    const closeSignUpComponent = () => {
        setTimeout(()=>{
            setOpenSignUp(false)
            setOpenSignIn(true)
        }, 1000);
    }
    if(!isLoggedIn && signUpError.signUpTry && !signUpError.error){
        closeSignUpComponent();
    }
    //Logout
    const logout = () => {
        setTimeout(() => {
            setSignUpError({signUpTry: false, error:false}),
            setSignInError({signTry: false, error: false}),
            setIsLoggedIn(false)
        }, 500)
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
        <SignInForm open={openSignIn} handleClose={handleCloseSignIn} signInError={signInError} setSignInError={setSignInError} />
        <SignUpForm open={openSignUp} handleClose={handleCloseSignUp} signUpError={signUpError} setSignUpError={setSignUpError} />
        </Box>
    );
}