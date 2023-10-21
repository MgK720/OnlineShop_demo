import {useState, useEffect} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignInForm from '../Authentication/SignInForm';
import ProfileForm from "../Profile/ProfileForm"

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import MobileMenu from "./Menu/MobileMenu";
import DesktopMenu from "./Menu/DesktopMenu";
import SignUpForm from "../Authentication/SignUpForm";
import Badge from '@mui/material/Badge';
import Cart from "../Cart/Cart";

export default function NavBar({isLoggedIn, setIsLoggedIn, numberOfItemsInCart, cartItems, setCartItems}) {
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
            onClick: () =>{
                openProfileForm()
            },
            icon: <AccountCircleIcon/>
        },
        {
            name: "history",
            onClick: () => {
                () => {};
            },
            icon: <HistoryIcon/>
        },
        {
            name: "cart",
            onClick: () => {
                openCartDialog()
            },
            icon: <Badge badgeContent={numberOfItemsInCart} color="warning"><ShoppingCartIcon/></Badge>
        },
        {
            name: "logout",
            onClick: () => {
                logout()
            },
            icon: <LogoutIcon/>
        }
    ]
    //Przerobić ponizsze na pojedynczy useState z objectem dla kazdego "buttona" - tak jak w ../Profile/ProfileForm
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
    //Profile
    const [isProfileComplete, setIsProfileComplete] = useState(false); //potrzebne pozniej do sprawdzania czy uzytkownik moze zlozyc zamowienie
    const [profileError, setProfileError] = useState({editTry: false, error: false})
    const [openProfile, setOpenProfile] = useState(false);

    const openProfileForm = () =>{
        setOpenProfile(true);
    }
    const handleCloseProfile = () =>{
        setOpenProfile(false);
    }
    //Cart 
    const [openCart, setOpenCart] = useState(false);
    const openCartDialog = () =>{
        setOpenCart(true);
    }
    const handleCloseCartDialog = () =>{
        setOpenCart(false);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
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
            <ProfileForm open={openProfile} handleClose={handleCloseProfile} profileFormError={profileError} setProfileFormError={setProfileError} isProfileComplete={isProfileComplete} setIsProfileComplete={setIsProfileComplete}/>
            <Cart open={openCart} handleClose={handleCloseCartDialog} isProfileComplete={isProfileComplete} cartItems={cartItems} setCartItems={setCartItems}/>
        </Box>
    );
}